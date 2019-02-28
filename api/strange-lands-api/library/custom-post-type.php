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

add_action( 'init', 'strain_post_cpt' );

function strain_post_cpt() {
  $labels = array(
    'name'               => _x( 'Strain Posts', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Strain Post', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Strains', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Strains', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Strain Post', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Strain Post', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Strain Posts', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Strain Posts', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Strain Posts', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Strain Posts', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Strain Posts', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Strain Post:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Strain Post found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Strain Post found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'strain-post' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('category', 'product'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-palmtree',
    'show_in_rest'       => true,
    'rest_base'          => 'strain-post-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'thumbnail' )
  );
  register_post_type( 'strain_post', $args );
}

add_action( 'init', 'stockist_post_cpt' );

function stockist_post_cpt() {
  $labels = array(
    'name'               => _x( 'Stockists', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Stockist', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Stockists', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Stockists', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Stockist', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Stockist', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Stockist', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Stockist', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Stockist', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Stockist', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Stockist', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Stockist:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Stockist Post found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Stockist Post found in Trash.', 'your-plugin-textdomain' )
  );
  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'stockist-post' ),
    'capability_type'    => 'post',
    'taxonomies'         => array('category'),
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'          => 'dashicons-location-alt',
    'show_in_rest'       => true,
    'rest_base'          => 'stockist-post-api',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'thumbnail' )
  );
  register_post_type( 'stockist', $args );
}

add_action( 'init', 'product_taxonomy', 30 );
  function product_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Product Types', 'taxonomy general name' ),
    'singular_name'         => _x( 'Product Type', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Product Types' ),
    'all_items'             => __( 'All Product Types' ),
    'parent_item'           => __( 'Parent Product Types' ),
    'parent_item_colon'     => __( 'Parent Product Types:' ),
    'edit_item'             => __( 'Edit Product Type' ),
    'update_item'           => __( 'Update Product Type' ),
    'add_new_item'          => __( 'Add New Product Type' ),
    'new_item_name'         => __( 'New Product Type Name' ),
    'menu_name'             => __( 'Product Types' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'product' ),
    'show_in_rest'          => true,
    'rest_base'             => 'product-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'product', array( 'strain' ), $args );
}

function tsm_filter_post_type_by_taxonomy($post_type, $taxonomy) {
	global $typenow;
	if ($typenow == $post_type) {
		$selected      = isset($_GET[$taxonomy]) ? $_GET[$taxonomy] : '';
		$info_taxonomy = get_taxonomy($taxonomy);
		wp_dropdown_categories(array(
			'show_option_all' => __("All {$info_taxonomy->label}"),
			'taxonomy'        => $taxonomy,
			'name'            => $taxonomy,
			'orderby'         => 'name',
			'selected'        => $selected,
			'show_count'      => true,
			'hide_empty'      => true,
		));
	};
}

function filter_strain_product() {
  tsm_filter_post_type_by_taxonomy('strain', 'product');
}

add_action('restrict_manage_posts', 'filter_strain_product');

function tsm_convert_id_to_term_in_query_product($query) {
	global $pagenow;
	$post_type = 'strain';
	$taxonomy  = 'product';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

add_filter('parse_query', 'tsm_convert_id_to_term_in_query_product');

?>
