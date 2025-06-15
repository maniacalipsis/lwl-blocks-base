import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          InspectorControls,
          MediaUploadCheck,
          MediaUpload,
          InnerBlocks,
       } from '@wordpress/block-editor';
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

   const headerTagOptions=metadata.attributes.header_tag.enum.map(tagName_=>({value:tagName_,label:__(tagName_,txtD)}));
   const imageTagOptions =metadata.attributes.image_tag .enum.map(tagName_=>({value:tagName_,label:__(tagName_,txtD)}));

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
                                          <Button onClick={open}>{props_.attributes.image ? <img src={props_.attributes.image.url}/> : __('Select Image', txtD)}</Button>
                                       </BaseControl>
                                    )}
                  onSelect={(media_)=>{props_.setAttributes({image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
               />
            </MediaUploadCheck>
            <TextControl label={__('Header',txtD)} className="header" title={__('Header text',txtD)} value={props_.attributes.header_text} onChange={(newVal_)=>props_.setAttributes({header_text:newVal_})} />
            <BaseControl label={__('Text',txtD)} className="text">
               <InnerBlocks allowedBlocks={['core/paragraph','core/list','core/details','core/buttons','core/quote']} defaultBlock={['core/paragraph',{placeholder:__('Text',txtD)+'...'}]}/>
            </BaseControl>
         </Flex>
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
