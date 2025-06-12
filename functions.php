<?php
namespace LWL_Blocks;

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
*/

function render_attributes(array $attributes,string $attrs_prefix="",array $attrs_map=["anchor"=>"id","className"=>"class","style"=>"style"]):string
{
	//Renders HTML tag attributes to string with leading whitespace included.

	$res="";

	foreach ($attrs_map as $key=>$attr_name)
		if (!empty($attributes[$attrs_prefix.$key]))
			$res.=" $attr_name=\"".htmlspecialchars($attributes[$attrs_prefix.$key],flags:ENT_COMPAT,double_encode:false)."\"";

	return $res;
}

?>
