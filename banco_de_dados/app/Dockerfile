# syntax=docker/dockerfile:1.4
FROM --platform=$BUILDPLATFORM php:8.0.9-apache as builder

CMD ["apache2-foreground"]

FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git php-mysql vim
EOF

RUN docker-php-ext-install pdo pdo_mysql

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql php8.1-mysql

RUN apt-get update && apt-get install -y \
		libfreetype-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
	&& docker-php-ext-install -j$(nproc) gd

  RUN curl -fsSL '[url-to-custom-php-module]' -o module-name.tar.gz \
	&& mkdir -p module-name \
	&& sha256sum -c "[shasum-value]  module-name.tar.gz" \
	&& tar -xf module-name.tar.gz -C module-name --strip-components=1 \
	&& rm module-name.tar.gz \
	&& ( \
		cd module-name \
		&& phpize \
		&& ./configure --enable-module-name \
		&& make -j "$(nproc)" \
		&& make install \
	) \
	&& rm -r module-name \
	&& docker-php-ext-enable module-name

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["apache2-foreground"]