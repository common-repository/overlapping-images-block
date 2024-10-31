<?php
/**
 * Plugin Name:       Overlapping Images Block
 * Description:       Shows decoratively overlapping image and text content.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Peter Steele
 * Author URI:        peterhsteele.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       overlapping-images
 *
 * @package           overlapping-images
 */

/*
Overlapping Images Block is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Overlapping Images Block is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Overlapping Images Block. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 * 
 */
function overlapping_images_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'overlapping_images_block_init' );