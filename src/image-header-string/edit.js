import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          MediaUploadCheck,
          MediaUpload,
       } from '@wordpress/block-editor';
import {
          getBlockType,
       } from '@wordpress/blocks';
import {
          Flex,
          __experimentalGrid as Grid,
          TextControl,
          SelectControl,
          Button,
          BaseControl,
       } from '@wordpress/components';

import metadata from './block.json';
import './editor.scss';


export function edit(props_)
{
   const txtD=metadata.textdomain; //Shorthand for translation text-domain.

   const headerTagOptions=metadata.attributes.header_tag.enum.map(tagName_=>({value:tagName_,label:__(tagName_,txtD)}));

   return (
      <>
         <Flex {...useBlockProps()} direction="row" wrap="true" align="flex-end">
            <MediaUploadCheck>
               <MediaUpload
                  allowedTypes={['image']}
                  render={({open})=>(
                                       <BaseControl className="image">
                                          <Button onClick={open}>{props_.attributes.image ? <img src={props_.attributes.image.url}/> : __('Select Image', txtD)}</Button>
                                       </BaseControl>
                                    )}
                  onSelect={(media_)=>{props_.setAttributes({image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
               />
            </MediaUploadCheck>
            <Grid className="header">
               <span className="label">{__('Header',txtD)}</span>
               <SelectControl className="header_tag" title={__('HTML tag',txtD)} value={props_.attributes.header_tag} options={headerTagOptions} onChange={(newVal_)=>props_.setAttributes({header_tag:newVal_})}/>
               <TextControl className="header_text" title={__('Header text',txtD)} value={props_.attributes.header_text} onChange={(newVal_)=>props_.setAttributes({header_text:newVal_})} />
            </Grid>
            <TextControl className="text" label={__('Text',txtD)} value={props_.attributes.text} onChange={(newVal_)=>props_.setAttributes({text:newVal_})}/>
         </Flex>
      </>
   );
}

export function save()
{
   return (
      <div {...useBlockProps.save()}></div>
   );
}
