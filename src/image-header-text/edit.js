import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          BlockControls,
          InspectorControls,
          MediaUploadCheck,
          MediaUpload,
          MediaReplaceFlow,
          InnerBlocks,
       } from '@wordpress/block-editor';
import {
          getBlockType,
       } from '@wordpress/blocks';
import {
          Flex,
          TextControl,
          SelectControl,
          Button,
          BaseControl,
       } from '@wordpress/components';

import './editor.scss';

export function Edit(props_)
{
   return (
      <>
         <div {...useBlockProps()}>
            <MediaUploadCheck>
               <MediaUpload
                  allowedTypes={['image']}
                  render={({open})=>(
                                       <Button className="image" onClick={open}>{props_.attributes.image ? <img src={props_.attributes.image.url}/> : __('Select Image', 'lwl-blocks-base')}</Button>
                                    )}
                  onSelect={(media_)=>{props_.setAttributes({image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
               />
            </MediaUploadCheck>
            <Flex className="header">
               <SelectControl label="&nbsp;" value={props_.attributes.header_level} options={[{value:2,label:'H2'},{value:3,label:'H3'},{value:4,label:'H4'},{value:5,label:'H5'},{value:6,label:'H6'},{value:-1,label:'div'}]} onChange={(newVal_)=>props_.setAttributes({header_level:newVal_})}/>
               <TextControl label={__('Header','lwl-blocks-base')} value={props_.attributes.header} onChange={(newVal_)=>props_.setAttributes({header:newVal_})} />
            </Flex>
            <BaseControl label={__('Text','lwl-blocks-base')}>
               <InnerBlocks allowedBlocks={['core/paragraph','core/list','core/details','core/buttons','core/quote']} defaultBlock={['core/paragraph',{placeholder:__('Text','lwl-blocks-base')+'...'}]}/>
            </BaseControl>
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
