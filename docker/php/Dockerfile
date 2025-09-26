FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git unzip pkg-config \
    libicu-dev libzip-dev \
    libpng-dev libjpeg62-turbo-dev libfreetype6-dev \
    libonig-dev libxml2-dev \
 && docker-php-ext-configure intl \
 && docker-php-ext-configure gd \
      --with-freetype=/usr/include/freetype2 \
      --with-jpeg \
 && docker-php-ext-install -j$(nproc) intl pdo_mysql zip gd mbstring xml opcache \
 && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY docker/php/php.ini /usr/local/etc/php/php.ini

WORKDIR /var/www/html
