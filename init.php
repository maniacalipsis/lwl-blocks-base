<?php
/**
 * Plugin Name:       LWL-Blocks [Base]
 * Description:       Light-Weight-Layout Blocks - Base collection.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      8.2
 * Author:            FSG a.k.a ManiaC
 * Author URI:        http://maniacalipsis.ru/
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       lwl-blocks-base
 * Requires Plugins:  Utilities: 2.3
 *
 * @package CreateBlock
 */

namespace LWL_Blocks\Init;

if (!defined("ABSPATH"))
   exit; // Exit if accessed directly.

/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function plugin_init()
{
   //Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s).
   if (function_exists("\\wp_register_block_types_from_metadata_collection"))
   {
      \wp_register_block_types_from_metadata_collection(__DIR__."/build",__DIR__."/build/blocks-manifest.php");
      return;
   }

   //Registers the block(s) metadata from the `blocks-manifest.php` file.
   if ( function_exists( "\\wp_register_block_metadata_collection" ) )
      \wp_register_block_metadata_collection(__DIR__."/build",__DIR__."/build/blocks-manifest.php");

   //Registers the block type(s) in the `blocks-manifest.php` file.
   $manifest_data=require __DIR__."/build/blocks-manifest.php";
   foreach (array_keys($manifest_data) as $block_type)
      \register_block_type(__DIR__."/build/$block_type");
}
add_action("init",__NAMESPACE__."\\plugin_init");
