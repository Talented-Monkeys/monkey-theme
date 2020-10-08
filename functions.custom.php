<?php
/**
 * ------------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------------
 */
function inlineSvg(int $attachmentId): string
{
    $type = get_post_mime_type($attachmentId);
    if ( 'image/svg+xml' != $type )
        return '';

    return file_get_contents(get_attached_file($attachmentId));
}

/**
 * ------------------------------------------------------------------------------
 * Language definition
 * ------------------------------------------------------------------------------
 */
define("CURRENT_LANGUAGE", (ICL_LANGUAGE_CODE) ? ICL_LANGUAGE_CODE : 'en');
setlocale(LC_TIME, CURRENT_LANGUAGE.'_'.strtoupper(CURRENT_LANGUAGE));