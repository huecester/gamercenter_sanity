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
   * Icon — `image`
   *
   *
   */
  icon?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: 'image';
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;

        /**
         * Alt Text — `string`
         *
         *
         */
        alt?: string;
      }>
  >;

  /**
   * Invite Link — `string`
   *
   *
   */
  inviteLink?: string;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Body — `array`
   *
   *
   */
  body?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
        _type: 'image';
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;

        /**
         * Alt Text — `string`
         *
         *
         */
        alt?: string;
      }>
  >;
}

export type Documents = Bot | Post;
