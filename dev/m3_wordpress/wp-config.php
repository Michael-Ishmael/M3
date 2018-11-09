<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'amec_m3');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', '3675wc2E8AA;;');

/** MySQL hostname */
define('DB_HOST', 'localhost:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'VkNCGa4$pZs( b6~6afgsBFg=j5K|%))q;1|dVwgw8g^1-+:s+UU3#re!)p7OvJh');
define('SECURE_AUTH_KEY',  ';K[[qA9P{dW*D_ZU%Q:{jP.eCqpDto7L%fMm<y^#gs`{$[_IOr_/tECc7BVOK1N1');
define('LOGGED_IN_KEY',    'jg#[?r=q&SoNT_ZjI2IB1r#t3xk7$$nS,#:K+vI#AKii-fAF:UUq5x>6wZ}]]ZGt');
define('NONCE_KEY',        'H_uq0cZ|.t)7iZh+`=h:fpzm#U^IT)9/hOH5:4Mys@bf6s{4[$Jg V%nxSi~alJ:');
define('AUTH_SALT',        '^ YT%_QAD} Vht764*KM$S 2}wewvIFxHvg$N|>Ro39g |[$Q_qs?wdL_BlX{im2');
define('SECURE_AUTH_SALT', 'O}/K`zDdD$,+Bfs_ }+h7n4cboa3+7Q|+u cwdw#tLzz:2w}Um7ymr9|i(B0C%)~');
define('LOGGED_IN_SALT',   'qO>NPIZ9gUxx1eHu#2,HLoE9OK;pO|1?gjZ`8KDHRl1vs&dCIP$lMo.atrS k09R');
define('NONCE_SALT',       'AyO>:5a4%1esm6i@h)V>k2=Yr?yb[xG g?HcTgt5~8piz2xS+|h47l-}WD5]?TK$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
