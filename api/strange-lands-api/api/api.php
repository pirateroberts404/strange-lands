<?php
  require_once('utils.php');
  require_once('endpoints.php');

function cpt_instagram(){
  $args = array(
    'post_type' => 'instagram_post',
    'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  if ( $the_query->have_posts() ) :
    $data = array();
    while ($the_query->have_posts()) : $the_query->the_post();
      $post = get_post($post_id);
      $data[] = array(
        'id' => $post->ID,
        'title' => $post->post_title,
        'slug' => $post->post_name,
        'content' => $post,
        'thumbnail' => get_the_post_thumbnail_url($post->ID),
      );
    endwhile;
  endif;
  return $data;
}