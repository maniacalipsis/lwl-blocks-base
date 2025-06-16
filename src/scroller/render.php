<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

$root_tag=strtoupper(preg_replace("/[^a-z0-9]/","",$attributes["root_tag"]));
$attributes["scrolling_speed"]=$attributes["scrolling_speed_val"].$attributes["scrolling_speed_unit"];
$root_block_attrs=\render_block_attributes($attributes,attrs_map:["anchor"=>"id","className"=>"class","style"=>"style","scrolling_speed"=>"data-speed","scrolling_cycled"=>"data-cycled","scrolling_shortcuts"=>"data-shortcuts"]);

if (!\preg_match("/(^| )content( |$)/i",$attributes["content_className"]))
   $attributes["content_className"]="content ".$attributes["content_className"];
$content_block_attrs=\render_block_attributes($attributes,attrs_prefix:"content_");

?>
<<?=$root_tag?> <?=$root_block_attrs?>>
   <DIV CLASS="area">
      <DIV <?=$content_block_attrs?>>
         <?php
         foreach ($block->inner_blocks as $key=>$inner_block)
         {
            if (!preg_match("/(^| )item( |$)/i",$inner_block->attributes["className"]))
               $inner_block->attributes["className"]="item ".$inner_block->attributes["className"];

            echo $inner_block->render();
         }
         ?>
      </DIV>
   </DIV>
   <?php if ($attributes["has_buttons"]):?>
   <DIV CLASS="button left"></DIV>
   <DIV CLASS="button right"></DIV>
   <?php endif;?>
</<?=$root_tag?>>
