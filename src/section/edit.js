import {__} from '@wordpress/i18n';   //Translations module.
import {
          useBlockProps,
          InnerBlocks,
          InspectorControls,
          MediaUploadCheck,
          MediaUpload,
       } from '@wordpress/block-editor';
import {
          Panel,
          PanelBody,
          BaseControl,
          TextControl,
          CheckboxControl,
          Button,
       } from '@wordpress/components';

import metadata from './block.json';
import './editor.scss';


export function edit(props_)
{
   const txtD=metadata.textdomain; //Shorthand for translation text-domain.
   const inspectorPanelClassName=props_.name.replace('/','-');

   return (
      <>
         <InspectorControls>
            <Panel className={inspectorPanelClassName}>
               <PanelBody title={__(metadata.title+' settings',txtD)}>
                  <MediaUploadCheck>
                     <MediaUpload
                        allowedTypes={['image']}
                        render={({open})=>(
                                             <BaseControl className="image bg" label={__('Background Image',txtD)}>
                                                <Button className="set_image" onClick={open}>{props_.attributes.bg_image ? <img src={props_.attributes.bg_image.url}/> : __('Select Image', txtD)}</Button>
                                                {props_.attributes.bg_image&&<Button className="unset_image" onClick={(e_)=>{props_.setAttributes({bg_image:null});}}>☒</Button>}
                                             </BaseControl>
                                          )}
                        onSelect={(media_)=>{props_.setAttributes({bg_image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
                     />
                  </MediaUploadCheck>
                  <CheckboxControl label={__('Has inner',txtD)} checked={props_.attributes.has_inner} onChange={(newVal_)=>{props_.setAttributes({has_inner:newVal_}); document.querySelector('.block-editor-block-inspector .components-panel.'+inspectorPanelClassName+' .inner_settings').classList.toggle('hidden',!newVal_);}} help={__('Render section with additional inner element commonly used in designs with limited content width.',txtD)} />
                  <div class={'inner_settings'+(props_.attributes.has_inner ? '' : ' hidden')}>
                     <MediaUploadCheck>
                        <MediaUpload
                           allowedTypes={['image']}
                           render={({open})=>(
                                                <BaseControl className="image inner_bg" label={__('Inner\'s Background Image',txtD)}>
                                                   <Button className="set_image" onClick={open}>{props_.attributes.inner_bg_image ? <img src={props_.attributes.inner_bg_image.url}/> : __('Select Image', txtD)}</Button>
                                                   {props_.attributes.inner_bg_image&&<Button className="unset_image" onClick={(e_)=>{props_.setAttributes({inner_bg_image:null});}}>☒</Button>}
                                                </BaseControl>
                                             )}
                           onSelect={(media_)=>{props_.setAttributes({inner_bg_image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
                        />
                     </MediaUploadCheck>
                     <TextControl label={__('Inner\'s additional CSS class[es]',txtD)} value={props_.attributes.inner_className} onChange={(newVal_)=>props_.setAttributes({inner_className:newVal_})} help={__('Separate multiple classes with spaces.')}/>
                  </div>
               </PanelBody>
            </Panel>
         </InspectorControls>
         <div {...useBlockProps()}>
            <div className="params">
               {__(metadata.title,txtD)}
            </div>
            <InnerBlocks />
            <div className="ending"></div>
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
