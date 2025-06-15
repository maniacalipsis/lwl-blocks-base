<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render (in particular, to learn about predefined variables available).
 */
namespace LWL_Blocks;

$root_block_attrs=\render_block_attributes($attributes);
$inner_block_attrs=\render_block_attributes($attributes,attrs_prefix:"inner_");
?>
<SECTION <?=$root_block_attrs?>>
   <DIV <?=$inner_block_attrs?>>
   <?php
    foreach ($block->inner_blocks as $key=>$inner_block)
       echo $inner_block->render();
   ?>
   </DIV>
</SECTION>
