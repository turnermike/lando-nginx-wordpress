<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** Database username */
define('DB_USER', 'wordpress');

/** Database password */
define('DB_PASSWORD', 'wordpress');

/** Database hostname */
define('DB_HOST', 'database');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',          '6ZFd>DQQ (sDgo_7B`7Re:RDO_;y(4-KmXABE6$0**^6n P>zz)6`qW$)8X,5j-5');
define('SECURE_AUTH_KEY',   ',}$u;f2m#P`egzHR6UL9VpRmH|_kqQ5+.^X4Wv*yW0k:Ouj$} X9jT.oYEvUO.ye');
define('LOGGED_IN_KEY',     'pR0}^WJ][Z2gnJ!MUw_Y :J[_l#yAPDTKjbn&A~DsG9zxu-V|VUC=>D<|&B5>nfh');
define('NONCE_KEY',         '?w?rFx+|Vn%b3>4P4p4<5{4fjy[^:._5p%]sde@9NUl)iqk<{O@3R`hM4FkA7,Fh');
define('AUTH_SALT',         '^CWC2&4c8e1H GOR*>x$Y`7H~X0cog+pJ<8nX7z^ROLP&@#L9ym,u!t`c{ih.B2!');
define('SECURE_AUTH_SALT',  'VOzR+Yy^UcHf?,#C2 ]h[#L~RHy(s1fq-.Btw7 D?HG9MAXY ~/72p,5p-#_cV+<');
define('LOGGED_IN_SALT',    'c|F[6mcI%]0*fV~i|)>XqWJvDKIF5(,Pf9 wtxG$!%Cg8oz.*JflIKZ`}*K2+C)t');
define('NONCE_SALT',        'Ba]=_!eJ6LUz}.m@2:dVq$L*b&Tf -wa33NCj@-O]X_X+Rv?/Kug1Jx#FiwzoE(v');
define('WP_CACHE_KEY_SALT', 'baP)<#o9ZVv+,&DtUMX#^P$uk42(NA0*M69kQ[EVVyK}8f>k=p!1a{$o]</Jcl^A');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);

/* Add any custom values between this line and the "stop editing" line. */

// define('WP_HOME', 'http://' . $_SERVER['SERVER_NAME']);
// define('WP_SITEURL', 'http://' . $_SERVER['SERVER_NAME']);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';