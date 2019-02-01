<?php

add_action( 'after_switch_theme', 'fs_flush_rewrite_rules' );

function fs_flush_rewrite_rules() {
	flush_rewrite_rules();
}

add_action( 'init', 'instagram_post_cpt' );

function instagram_post_cpt() {
  $labels = array(
    'name'               => _x( 'Instagram Posts', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Instagram Post', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Instagram Posts', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Instagram Posts', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Instagram Post', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Instagram Post', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Instagram Posts', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Instagram Posts', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Instagram Posts', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Instagram Posts', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Instagram Posts', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Instagram Post:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Instagram Post found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Instagram Post found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'instagram-post' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('type'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-format-image',
    'show_in_rest'       => true,
    'rest_base'          => 'instagram-post-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'page-attributes', 'thumbnail' )
  );
  register_post_type( 'instagram_post', $args );
}

?>
