import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          InnerBlocks,
          InspectorControls,
       } from '@wordpress/block-editor';
import {
          getBlockType,
       } from '@wordpress/blocks';
import {
          Panel,
          PanelBody,
          SelectControl,
       } from '@wordpress/components';

import './editor.scss';

export function Edit(props_)
{
   let blockDef=getBlockType(props_.name);
   //console.log(blockDef);

   let contentBlocksTypeOptions=[];
   for (let blockName of blockDef.attributes.content_blocks_type.enum)
      contentBlocksTypeOptions.push({value:blockName,label:__(getBlockType(blockName)?.title,'lwl-blocks-base')});

   return (
      <>
         <InspectorControls>
            <Panel>
               <PanelBody title={__(blockDef.title+' settings','lwl-blocks-base')}>
                  <SelectControl value={props_.attributes.content_blocks_type} options={contentBlocksTypeOptions} onChange={(newVal_)=>props_.setAttributes({content_blocks_type:newVal_})} label={__('Inner\'s additional CSS class[es]','lwl-blocks-base')} help={__('Separate multiple classes with spaces.')}/>
               </PanelBody>
            </Panel>
         </InspectorControls>
         <div {...useBlockProps()}>
            <InnerBlocks allowedBlocks={[props_.attributes.content_blocks_type]} />
         </div>
      </>
   );
}

export function Save()
{
   return (
      <div {...useBlockProps.save()}>
         <InnerBlocks.Content />
      </div>
   );
}
