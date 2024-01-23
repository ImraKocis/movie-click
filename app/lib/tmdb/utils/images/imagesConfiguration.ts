export interface ImagesSizesProps {
  small?: string;
  medium?: string;
  large?: string;
  original?: string;
}

export const backdropSizes: ImagesSizesProps = {
  small: 'w300',
  medium: 'w780',
  large: 'w1280',
  original: 'original',
};

export const posterSizes: ImagesSizesProps = {
  small: 'w342',
  medium: 'w500',
  large: 'w780',
  original: 'original',
};

export const logoSizes: ImagesSizesProps = {
  small: 'w154',
  medium: 'w300',
  large: 'w500',
  original: 'original',
};

type ImageSizeType = 'small' | 'medium' | 'large' | 'original';

const imageBaseUrl: string = 'https://image.tmdb.org/t/p';

export class ImageUrlBuilder {
  protected readonly baseUrl: string = imageBaseUrl;
  private sizeConfig!: ImagesSizesProps;
  private imageSize!: ImageSizeType;
  private imageUrl!: string;

  public setSizeConfig(sizeConfig: ImagesSizesProps): this {
    this.sizeConfig = sizeConfig;
    return this;
  }

  public setImageSize(imageSize: ImageSizeType): this {
    this.imageSize = imageSize;
    return this;
  }

  public setImageUrl(imageUrl: string): this {
    this.imageUrl = imageUrl;
    return this;
  }

  private getSize(config: ImagesSizesProps, size: ImageSizeType): string {
    return config[size]!;
  }

  public build(): string {
    return `${this.baseUrl}/${this.getSize(this.sizeConfig, this.imageSize)}/${this.imageUrl}`;
  }
}
