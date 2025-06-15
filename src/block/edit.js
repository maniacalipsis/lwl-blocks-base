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

   //Support allowedBlocks restriction behind the scenes:
   let allowedBlocks=props_.attributes.allowedBlocks;
   if (allowedBlocks.length==0)  //If no blocks specified then all alowed.
      allowedBlocks=getBlockTypes().map(blockType_=>blockType_.name);

   return (
      <>
         <div {...useBlockProps()}>
            <InnerBlocks allowedBlocks={allowedBlocks} templateLock={props_.attributes.templateLock}/>
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
