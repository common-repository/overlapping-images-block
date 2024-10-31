import { __ } from '@wordpress/i18n';
import { DownUpText, UpDownText, TextDownUp, TextUpDown } from './assets/svgs.js'

const layoutButtonData = [
  {
    label: __( 'Switch to layout with image bottom left, image top center, and text middle right.', 'overlapping-images' ),
    name: 'down-up-text',
    icon: <DownUpText />
  },
  {
    label: __( 'Switch to layout with image top left, image bottom center, and text middle right.', 'overlapping-images' ),
    name: 'up-down-text',
    icon: <UpDownText />
  },
  {
    label: __( 'Switch to layout with text middle left, image top center, and image bottom right.', 'overlapping-images' ),
    name: 'text-up-down',
    icon: <TextUpDown />
  },
  {
    label: __( 'Switch to layout with text middle left, image bottom center, and image top right.', 'overlapping-images' ),
    name: 'text-down-up',
    icon: <TextDownUp />
    
  }
]

export { layoutButtonData }