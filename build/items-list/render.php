<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

?>
<DIV <?=\render_block_attributes($attributes)?>>
   <?php
   foreach ($block->inner_blocks as $key=>$inner_block)
   {
      if (!preg_match("/(^| )item( |$)/i",$inner_block->attributes["className"]))
         $inner_block->attributes["className"]="item ".$inner_block->attributes["className"];

      echo $inner_block->render();
   }
   ?>
</DIV>
