<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
namespace LWL_Blocks;

//Choose tag and tag-dependent attributes mapping:
switch ($attributes["tag"])
{
   case "button":
   {
      $tag_name="BUTTON";
      $attrs_map=["anchor"=>"id","className"=>"class","title"=>"title","style"=>"style","onclick"=>"onclick"];
      break;
   }
   case "a":
   default:
   {
      $tag_name="A";
      $attrs_map=["anchor"=>"id","className"=>"class","url"=>"href","target"=>"target","rel"=>"rel","title"=>"title","style"=>"style","onclick"=>"onclick"];
      break;
   }
}
//Set glyph as background:
if ($attributes["image"])
   $attributes["style"]="background-image:url('".\htmlspecialchars($attributes["image"]["url"])."')";

$root_block_attrs=\render_block_attributes($attributes,attrs_map:$attrs_map);

echo "<$tag_name $root_block_attrs>{$attributes["text"]}</$tag_name>";
?>
