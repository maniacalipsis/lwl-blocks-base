import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          InnerBlocks,
          InspectorControls,
       } from '@wordpress/block-editor';
import {
          getBlockTypes,
       } from '@wordpress/blocks';
import {
          Panel,
          PanelBody,
          __experimentalGrid as Grid,
          BaseControl,
          TextControl,
          __experimentalNumberControl as NumberControl,
          SelectControl,
          CheckboxControl,
       } from '@wordpress/components';

import metadata from './block.json';
import './editor.scss';


export function edit(props_)
{
   const txtD=metadata.textdomain; //Shorthand for translation text-domain.
   const inspectorPanelClassName=props_.name.replace('/','-');

   const contentBlocksTypeOptions=getBlockTypes().map(blockType_=>({value:blockType_.name,label:blockType_.title}));  //NOTE: Currently, the purpose of content_blocks_type is to make editing less error prone by preventing a child blocks of the different types to be inserted, rather than to restrict which block types can be inserted.
   const speedUnitOptions=metadata.attributes.scrolling_speed_unit.enum.map(unit_=>({value:unit_,label:__(unit_,txtD)}));

   return (
      <>
         <InspectorControls>
            <Panel className={inspectorPanelClassName}>
               <PanelBody title={__(metadata.title+' layout',txtD)}>
                  <SelectControl label={__('Items type',txtD)} value={props_.attributes.content_blocks_type} options={contentBlocksTypeOptions} onChange={(newVal_)=>props_.setAttributes({content_blocks_type:newVal_})}/>
                  <CheckboxControl label={__('Has Left/Right buttons',txtD)} checked={props_.attributes.has_buttons} onChange={(newVal_)=>props_.setAttributes({has_buttons:newVal_})} />
                  <TextControl label={__('Content block\'s additional CSS class[es]',txtD)} value={props_.attributes.content_className} onChange={(newVal_)=>props_.setAttributes({content_className:newVal_})} help={__('Separate multiple classes with spaces.')}/>
               </PanelBody>
               <PanelBody title={__(metadata.title+' animation',txtD)}>
                  <BaseControl label={__('Scrolling speed',txtD)} className="speed" help={__('Speed is a distance which content block moves per iteration. The % are counted from the current area width.')}>
                     <NumberControl className="val" value={props_.attributes.scrolling_speed_val} onChange={(newVal_)=>props_.setAttributes({scrolling_speed_val:newVal_})}/>
                     <SelectControl className="unit" value={props_.attributes.scrolling_speed_unit} options={speedUnitOptions} onChange={(newVal_)=>props_.setAttributes({scrolling_speed_unit:newVal_})}/>
                  </BaseControl>
                  <CheckboxControl label={__('Scrolling is Cycled',txtD)} checked={props_.attributes.scrolling_cycled} onChange={(newVal_)=>props_.setAttributes({scrolling_cycled:newVal_})} help={__('If set, scroling wraps when reaching the end or the start. If unset - it stops.')} />
               </PanelBody>
               <PanelBody title={__(metadata.title+' expert settings',txtD)} initialOpen="false">
                  <TextControl label={__('Shortcuts definitions',txtD)} value={props_.attributes.scrolling_shortcuts} onChange={(newVal_)=>props_.setAttributes({scrolling_shortcuts:newVal_})} />
               </PanelBody>
            </Panel>
         </InspectorControls>
         <div {...useBlockProps()}>
            <InnerBlocks allowedBlocks={[props_.attributes.content_blocks_type]} />
         </div>
      </>
   );
}

export function save()
{
   return (
      <div {...useBlockProps.save()}>
         <InnerBlocks.Content />
      </div>
   );
}
