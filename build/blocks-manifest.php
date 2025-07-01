<?php
// This file is generated. Do not modify it manually.
return array(
	'block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/block',
		'version' => '1.0.0',
		'title' => 'Block',
		'category' => 'design',
		'icon' => 'block-default',
		'description' => 'Just a simple block. An empty pot is simple item. It will not deisappear.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'allowedBlocks' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'templateLock' => array(
				'type' => 'string',
				'enum' => array(
					'',
					'all',
					'insert',
					'contentOnly'
				),
				'default' => ''
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/button',
		'version' => '1.0.0',
		'title' => 'Button',
		'category' => 'design',
		'icon' => 'button',
		'description' => 'Single link/button with glyph',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => 'button'
			),
			'image' => array(
				'type' => 'object'
			),
			'tag' => array(
				'type' => 'string',
				'enum' => array(
					'a',
					'button'
				),
				'default' => 'a'
			),
			'text' => array(
				'type' => 'string'
			),
			'url' => array(
				'type' => 'string'
			),
			'target' => array(
				'type' => 'string'
			),
			'rel' => array(
				'type' => 'string'
			),
			'onclick' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/image',
		'version' => '1.0.0',
		'title' => 'Bare Image',
		'category' => 'design',
		'icon' => 'image',
		'description' => 'Image element w/o <figure> wrap.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'image_tag' => array(
				'type' => 'string',
				'enum' => array(
					'img',
					'div'
				),
				'default' => 'img'
			),
			'image' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'image-header-string' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/image-header-string',
		'version' => '1.0.0',
		'title' => 'Image-Header-String',
		'category' => 'design',
		'icon' => 'analytics',
		'description' => 'List of items with image, header and unformatted text',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'image_tag' => array(
				'type' => 'string',
				'enum' => array(
					'img',
					'div',
					'figure'
				),
				'default' => 'img'
			),
			'image' => array(
				'type' => 'object'
			),
			'header_tag' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'div'
				),
				'default' => 'h3'
			),
			'header_text' => array(
				'type' => 'string'
			),
			'text' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'image-header-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/image-header-text',
		'version' => '1.0.0',
		'title' => 'Image-Header-Text',
		'description' => 'List of items with image, header and formatted text (provided by inner blocks)',
		'category' => 'design',
		'icon' => 'analytics',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'image_tag' => array(
				'type' => 'string',
				'enum' => array(
					'img',
					'div',
					'figure'
				),
				'default' => 'img'
			),
			'image' => array(
				'type' => 'object'
			),
			'header_tag' => array(
				'type' => 'string',
				'enum' => array(
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'div'
				),
				'default' => 'h3'
			),
			'header_text' => array(
				'type' => 'string'
			),
			'templateLock' => array(
				'type' => 'string',
				'enum' => array(
					'',
					'all',
					'insert',
					'contentOnly'
				),
				'default' => ''
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'items-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/items-list',
		'version' => '1.0.0',
		'title' => 'Items List',
		'category' => 'design',
		'icon' => 'grid-view',
		'description' => 'All its inner blocks has to be one of certain types.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'content_blocks_type' => array(
				'type' => 'string',
				'default' => 'lwl-blocks-base/image-header-text'
			),
			'templateLock' => array(
				'type' => 'string',
				'enum' => array(
					'',
					'all',
					'insert',
					'contentOnly'
				),
				'default' => ''
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'scroller' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/scroller',
		'version' => '1.0.0',
		'title' => 'Scroller',
		'category' => 'design',
		'icon' => 'leftright',
		'description' => 'Items scroller',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'root_tag' => array(
				'type' => 'string',
				'enum' => array(
					'div',
					'section'
				),
				'default' => 'div'
			),
			'content_blocks_type' => array(
				'type' => 'string',
				'default' => 'lwl-blocks-base/image-header-text'
			),
			'templateLock' => array(
				'type' => 'string',
				'enum' => array(
					'',
					'all',
					'insert',
					'contentOnly'
				),
				'default' => ''
			),
			'content_className' => array(
				'type' => 'string',
				'default' => ''
			),
			'has_buttons' => array(
				'type' => 'boolean',
				'default' => true
			),
			'scrolling_interval' => array(
				'type' => 'integer',
				'default' => '10'
			),
			'scrolling_speed_val' => array(
				'type' => 'string',
				'default' => '1'
			),
			'scrolling_speed_unit' => array(
				'type' => 'string',
				'enum' => array(
					'%',
					'vw',
					'em',
					'px'
				),
				'default' => 'px'
			),
			'scrolling_cycled' => array(
				'type' => 'boolean',
				'default' => true
			),
			'scrolling_shortcuts' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'lwl-blocks-base/section',
		'version' => '1.0.0',
		'title' => 'Section',
		'category' => 'design',
		'icon' => 'layout',
		'description' => 'Page section',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'className' => true,
			'background' => array(
				'backgroundImage' => true
			)
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string',
				'default' => ''
			),
			'bg_image' => array(
				'type' => 'object'
			),
			'has_inner' => array(
				'type' => 'boolean',
				'default' => true
			),
			'inner_className' => array(
				'type' => 'string',
				'default' => 'inner'
			),
			'inner_bg_image' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'lwl-blocks-base',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
