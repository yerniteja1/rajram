import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export interface Storage {
  upload(input: {
    key: string;
    body: Buffer | string;
    contentType?: string;
  }): Promise<string>;
  getSignedGetUrl(input: { key: string; expiresIn?: number }): Promise<string>;
  deleteObject(input: { key: string }): Promise<void>;
}

export interface StorageConfig {
  endpoint?: string;
  region?: string;
  bucket: string;
  accessKeyId?: string;
  secretAccessKey?: string;
}

export class S3Storage implements Storage {
  private readonly client: S3Client;
  private readonly bucket: string;

  constructor(config: StorageConfig) {
    this.bucket = config.bucket;
    this.client = new S3Client({
      endpoint: config.endpoint,
      region: config.region ?? "auto",
      credentials: {
        accessKeyId: config.accessKeyId ?? process.env.S3_ACCESS_KEY_ID ?? "",
        secretAccessKey:
          config.secretAccessKey ?? process.env.S3_SECRET_ACCESS_KEY ?? "",
      },
      forcePathStyle: true,
    });
  }

  async upload({
    key,
    body,
    contentType,
  }: {
    key: string;
    body: Buffer | string;
    contentType?: string;
  }): Promise<string> {
    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
      }),
    );
    return key;
  }

  async getSignedGetUrl({
    key,
    expiresIn = 3600,
  }: {
    key: string;
    expiresIn?: number;
  }): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    return getSignedUrl(this.client, command, { expiresIn });
  }

  async deleteObject({ key }: { key: string }): Promise<void> {
    await this.client.send(
      new DeleteObjectCommand({ Bucket: this.bucket, Key: key }),
    );
  }
}

let storage: Storage | null = null;

export function getStorage(): Storage {
  if (storage) {
    return storage;
  }
  storage = new S3Storage({
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    bucket: process.env.S3_BUCKET ?? "",
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  });
  return storage;
}
