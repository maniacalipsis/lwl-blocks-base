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
          SelectControl,
       } from '@wordpress/components';

import metadata from './block.json';
import './editor.scss';


export function edit(props_)
{
   const txtD=metadata.textdomain; //Shorthand for translation text-domain.

   const contentBlocksTypeOptions=getBlockTypes().map(blockType_=>({value:blockType_.name,label:blockType_.title}));  //NOTE: Currently, the purpose of content_blocks_type is to make editing less error prone by preventing a child blocks of the different types to be inserted, rather than to restrict which block types can be inserted.

   return (
      <>
         <InspectorControls>
            <Panel>
               <PanelBody title={__(metadata.title+' layout',txtD)}>
                  <SelectControl label={__('Items type',txtD)} value={props_.attributes.content_blocks_type} options={contentBlocksTypeOptions} onChange={(newVal_)=>{props_.setAttributes({content_blocks_type:newVal_});}}/>
               </PanelBody>
            </Panel>
         </InspectorControls>
         <div {...useBlockProps()}>
            <InnerBlocks allowedBlocks={[props_.attributes.content_blocks_type]} templateLock={props_.attributes.templateLock}/>
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
