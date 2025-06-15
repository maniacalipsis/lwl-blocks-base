<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

?>
<DIV <?=render_block_attributes($attributes)?>>
   <?php
    foreach ($block->inner_blocks as $key=>$inner_block)
       echo $inner_block->render();
   ?>
</DIV>
