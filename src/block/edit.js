import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          InnerBlocks,
          InspectorControls,
       } from '@wordpress/block-editor';
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

   const allowedBlocks=props_.attributes.allowedBlocks;

   return (
      <>
         <div {...useBlockProps()}>
            <InnerBlocks allowedBlocks={allowedBlocks} />
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
