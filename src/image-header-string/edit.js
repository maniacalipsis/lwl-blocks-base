import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          InspectorControls,
          MediaUploadCheck,
          MediaUpload,
       } from '@wordpress/block-editor';
import {
          getBlockType,
       } from '@wordpress/blocks';
import {
          Panel,
          PanelBody,
          Flex,
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
   const inspectorPanelClassName=props_.name.replace('/','-');

   const imageTagOptions =metadata.attributes.image_tag .enum.map(tagName_=>({value:tagName_,label:__(tagName_,txtD)}));
   const headerTagOptions=metadata.attributes.header_tag.enum.map(tagName_=>({value:tagName_,label:__(tagName_,txtD)}));

   return (
      <>
         <InspectorControls>
            <Panel className={inspectorPanelClassName}>
               <PanelBody title={__(metadata.title+' layout',txtD)}>
                  <SelectControl label={__('Image HTML tag',txtD)} className="image_tag" value={props_.attributes.image_tag} options={imageTagOptions} onChange={(newVal_)=>props_.setAttributes({image_tag:newVal_})}/>
                  <SelectControl label={__('Header HTML tag',txtD)} className="header_tag" value={props_.attributes.header_tag} options={headerTagOptions} onChange={(newVal_)=>props_.setAttributes({header_tag:newVal_})}/>
               </PanelBody>
            </Panel>
         </InspectorControls>
         <Flex {...useBlockProps()} direction="row" wrap="true" align="flex-end">
            <MediaUploadCheck>
               <MediaUpload
                  allowedTypes={['image']}
                  render={({open})=>(
                                       <BaseControl className="image">
                                          <Button className="set_image" onClick={open}>{props_.attributes.image ? <img src={props_.attributes.image.url}/> : __('Select Image', txtD)}</Button>
                                          {props_.attributes.image&&<Button className="unset_image" onClick={(e_)=>{props_.setAttributes({image:null});}}>☒</Button>}
                                       </BaseControl>
                                    )}
                  onSelect={(media_)=>{props_.setAttributes({image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
               />
            </MediaUploadCheck>
            <TextControl label={__('Header',txtD)} className="header" title={__('Header text',txtD)} value={props_.attributes.header_text} onChange={(newVal_)=>props_.setAttributes({header_text:newVal_})} />
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
