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
          TextControl,
          CheckboxControl,
       } from '@wordpress/components';

import './editor.scss';

export function Edit(props_)
{
   let blockDef=getBlockType(props_.name);

   return (
      <>
         <InspectorControls>
            <Panel>
               <PanelBody title={__(blockDef.title+' settings','lwl-blocks-base')}>
                  <CheckboxControl checked={props_.attributes.has_inner} onChange={(newVal_)=>props_.setAttributes({has_inner:newVal_})} label={__('Has inner','lwl-blocks-base')} help={__('Render section with additional inner element commonly used in designs with limited content width.','lwl-blocks-base')} />
                  <TextControl value={props_.attributes.inner_className} onChange={(newVal_)=>props_.setAttributes({inner_className:newVal_})} label={__('Inner\'s additional CSS class[es]','lwl-blocks-base')} help={__('Separate multiple classes with spaces.')}/>
               </PanelBody>
            </Panel>
         </InspectorControls>
         <div {...useBlockProps()}>
            <div className="params">
               {__(blockDef.title,'lwl-blocks-base')}
            </div>
            <InnerBlocks />
            <div className="ending"></div>
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
