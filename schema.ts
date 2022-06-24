import type {
	SanityAsset,
	SanityBlock,
	SanityDocument,
	SanityFile,
	SanityGeoPoint,
	SanityImage,
	SanityImageAsset,
	SanityImageCrop,
	SanityImageDimensions,
	SanityImageHotspot,
	SanityImageMetadata,
	SanityImagePalette,
	SanityImagePaletteSwatch,
	SanityKeyed,
	SanityKeyedReference,
	SanityReference,
} from 'sanity-codegen';

export type {
	SanityReference,
	SanityKeyedReference,
	SanityAsset,
	SanityImage,
	SanityFile,
	SanityGeoPoint,
	SanityBlock,
	SanityDocument,
	SanityImageCrop,
	SanityImageHotspot,
	SanityKeyed,
	SanityImageAsset,
	SanityImageMetadata,
	SanityImageDimensions,
	SanityImagePalette,
	SanityImagePaletteSwatch,
};

/**
 * Bot
 *
 *
 */
export interface Bot extends SanityDocument {
  _type: 'bot';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Invite Link — `string`
   *
   *
   */
  invite_link?: string;
}

export type Documents = Bot;
