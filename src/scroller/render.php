<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;
$attributes["content_className"]="content ".$attributes["content_className"]
?>
<DIV <?=render_block_attributes($attributes,attrs_map:["anchor"=>"id","className"=>"class","style"=>"style","data-speed"=>"data-speed","data-cycled"=>"data-cycled"])?>>
   <DIV CLASS="area">
      <DIV <?=render_block_attributes($attributes,attrs_prefix:"content_")?>>
         <?php
          foreach ($block->inner_blocks as $key=>$inner_block)
             echo $inner_block->render();
         ?>
      </DIV>
   </DIV>
   <?php if ($attributes["has_buttons"]):?>
   <DIV CLASS="button left"></DIV>
   <DIV CLASS="button right"></DIV>
   <?php endif;?>
</DIV>
