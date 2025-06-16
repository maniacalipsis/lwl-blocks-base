import {
          useState,
       } from 'react';
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
          Popover,
          Flex,
          TextControl,
          SelectControl,
          CheckboxControl,
          Button,
          BaseControl,
       } from '@wordpress/components';

import metadata from './block.json';
import './editor.scss';


export function edit(props_)
{
   const txtD=metadata.textdomain; //Shorthand for translation text-domain.
   const panelsClassName=props_.name.replace('/','-');

   const tagOptions=metadata.attributes.tag.enum.map(tagName_=>({value:tagName_,label:__(tagName_,txtD)}));

   //States:
   const [linkText,setLinkText]=useState(props_.attributes.text);                                     //Reflects link text changes in the attrs_toggle button.
   const linkTextOnChange=(newVal_)=>{props_.setAttributes({text:newVal_}); setLinkText(newVal_);}    // Shorthand for save link text and reflect it on the button.
   const [linkURL,setLinkURL]=useState(props_.attributes.url);                                        //Reflects link URL changes in the attrs_toggle button.
   const linkURLOnChange=(newVal_)=>{props_.setAttributes({url:newVal_}); setLinkURL(newVal_);}       // Shorthand for save link URL and reflect it on the button.
   const [linkAttrsBoxVisible,setLinkAttrsBoxVisible]=useState(false);                                //Toggles attributes popover.
   const submitByEnter=(e_)=>{if (e_.key=='Enter') setLinkAttrsBoxVisible(false);};                   //Closes popover by pressing Enter inside text inputs. As all changes are applied immediately, no other actions are needed.

   return (
      <>
         <InspectorControls>
            <Panel className={panelsClassName}>
               <PanelBody title={__(metadata.title+' layout',txtD)}>
                  <SelectControl label={__('HTML tag',txtD)} className="tag" value={props_.attributes.tag} options={tagOptions} onChange={(newVal_)=>props_.setAttributes({tag:newVal_})}/>
               </PanelBody>
            </Panel>
         </InspectorControls>
         <Flex {...useBlockProps()} direction="row" align="center">
            <MediaUploadCheck>
               <MediaUpload
                  allowedTypes={['image']}
                  render={({open})=>(
                                       <BaseControl className="image">
                                          <Button className="set_image" onClick={open}>{props_.attributes.image ? <img src={props_.attributes.image.url}/> : __('Glyph', txtD)}</Button>
                                          {props_.attributes.image&&<Button className="unset_image" onClick={(e_)=>{props_.setAttributes({image:null});}}>☒</Button>}
                                       </BaseControl>
                                    )}
                  onSelect={(media_)=>{props_.setAttributes({image:{id:media_.id,url:media_.url,alt:media_.alt,filename:media_.filename}})}}
               />
            </MediaUploadCheck>
            <Button className="attrs_toggle" title={linkURL} onClick={()=>{setLinkAttrsBoxVisible((isVisible_)=>!isVisible_)}}>{linkText}</Button>
            {
               linkAttrsBoxVisible &&
               <Popover className={panelsClassName}>
                  <TextControl label={__('Text',txtD)} className="text" value={props_.attributes.text} onChange={linkTextOnChange} onKeyDown={submitByEnter}/>
                  <TextControl label={__('URL',txtD)} className="url" title={__('URL',txtD)} value={props_.attributes.url} onChange={linkURLOnChange} onKeyDown={submitByEnter}/>
                  <CheckboxControl label={__('Open in new tab',txtD)} className="target" checked={props_.attributes.target=='_blank'} onChange={(checked_)=>props_.setAttributes({target:(checked_ ? '_blank' : '')})}/>
                  <Flex align="flex-end">
                     <TextControl label={__('rel',txtD)} className="rel" title={__('Rel',txtD)} list="link_rels" value={props_.attributes.rel} onChange={(newVal_)=>props_.setAttributes({rel:newVal_})} onKeyDown={submitByEnter}/>
                     <a href="https://www.w3schools.com/TAGS/att_a_rel.asp" target="_blank" class="help">?</a>
                     <datalist id="link_rels">
                        <option value="alternate"></option>
                        <option value="author"></option>
                        <option value="bookmark"></option>
                        <option value="external"></option>
                        <option value="help"></option>
                        <option value="license"></option>
                        <option value="next"></option>
                        <option value="nofollow"></option>
                        <option value="noopener"></option>
                        <option value="noreferrer"></option>
                        <option value="prev"></option>
                        <option value="search"></option>
                        <option value="tag"></option>
                     </datalist>
                  </Flex>
                  <TextControl label={__('onclick',txtD)} className="onclick" title={__('onclick',txtD)} value={props_.attributes.onclick} onChange={(newVal_)=>props_.setAttributes({onclick:newVal_})} onKeyDown={submitByEnter}/>
                  <Button onClick={()=>{setLinkAttrsBoxVisible(false)}} isDefault>{__('Apply ⏎',txtD)}</Button>
               </Popover>
            }
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
