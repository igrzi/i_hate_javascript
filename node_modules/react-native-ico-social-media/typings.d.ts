declare module 'react-native-ico-social-media' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'youtube' |
      'yelp' |
      'wordpress' |
      'wikipedia' |
      'whatsapp' |
      'vine' |
      'vimeo' |
      'twitter' |
      'tumblr' |
      'trello' |
      'stumbleupon' |
      'spotify' |
      'soundcloud' |
      'snapchat' |
      'skype' |
      'shutterstock' |
      'scribd' |
      'reddit' |
      'quora' |
      'plaxo' |
      'pinterest' |
      'periscope' |
      'paypal' |
      'path' |
      'myspace' |
      'medium' |
      'linkedin' |
      'kickstarter' |
      'instagram' |
      'html-5' |
      'howcast' |
      'hi5' |
      'google-plus' |
      'foursquare' |
      'flickr' |
      'facebook' |
      'etsy' |
      'envato' |
      'dropbox' |
      'dribbble' |
      'deviantart' |
      'delicious' |
      'creative-market' |
      'buffer' |
      'box' |
      'bing' |
      'behance' |
      'android' |
      'amazon';

    type iconColors = '#00186A' |
      '#002987' |
      '#005DE1' |
      '#0067FF' |
      '#0074D2' |
      '#00769D' |
      '#0077B7' |
      '#0085CC' |
      '#0088C3' |
      '#0090E1' |
      '#00A4C3' |
      '#00AAF2' |
      '#00AD6C' |
      '#00AEF0' |
      '#00C967' |
      '#00CE62' |
      '#00D95F' |
      '#00E470' |
      '#00FD8D' |
      '#01CB3E' |
      '#04B086' |
      '#050505' |
      '#1587EA' |
      '#171715' |
      '#181A1C' |
      '#222A30' |
      '#2950A1' |
      '#2A445D' |
      '#333F40' |
      '#475993' |
      '#518FE1' |
      '#69B4E5' |
      '#7024C4' |
      '#76A9EA' |
      '#7AD06D' |
      '#90A358' |
      '#90B24C' |
      '#9F1121' |
      '#A6285F' |
      '#AAC148' |
      '#C21975' |
      '#C74C4D' |
      '#CF2217' |
      '#D4D1D1' |
      '#D64C1B' |
      '#D80000' |
      '#DC0000' |
      '#DE9329' |
      '#E09B3D' |
      '#E65300' |
      '#EB4427' |
      '#F34A38' |
      '#F61C0D' |
      '#FC490B' |
      '#FF007E' |
      '#FF1A03' |
      '#FF4175' |
      '#FF4403' |
      '#FF4B30' |
      '#FF9414' |
      '#FFAC35' |
      '#FFBA00' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
