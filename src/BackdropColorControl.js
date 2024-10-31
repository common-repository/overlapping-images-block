import { Dropdown, ToolbarButton } from '@wordpress/components'
import { brush } from '@wordpress/icons'
import { __ } from '@wordpress/i18n'

export default ({renderContent}) => {
  return (
    <Dropdown 
    popoverProps={{
      className: 'overlapping-imgs-collage-bg-color-control',
      headerTitle: __('Backdrop Color', 'overlapping-images'),
      variant: 'toolbar',
      placement: 'bottom-start'
    }}
    renderContent={renderContent}
    renderToggle={({isOpen, onToggle})=>{
      return (
        <ToolbarButton 
        icon={brush}
        subscript={__('Backdrop Color','overlapping-images')}
        describedBy={__('Choose backdrop color', 'overlapping-images')}
        label={__('Backdrop Color', 'overlapping-images')}
        showTooltip={true}
        onClick={onToggle}
        />
      )
    }}
    />
  )
}