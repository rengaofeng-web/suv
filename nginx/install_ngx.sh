#! /bin/bash

domain=$1

n=`echo $domain | tr '.' '\n' | wc -l`

echo $n
if [ "$n" -eq "2" ];then
echo "2 $domain"

sed -e "s/DOMAIN.COM/$domain/g" DOMAIN.COM.conf >$domain.conf
ln -s /var/www/$domain.git/nginx/$domain.conf /etc/nginx/conf.d/$domain.conf

sed -e "s/TEST.DOMAIN.COM/www2.$domain/g" -e "s/DOMAIN.COM/$domain/g" TEST.DOMAIN.COM.conf >www2.$domain.conf
ln -s /var/www/$domain.git/nginx/www2.$domain.conf /etc/nginx/conf.d/www2.$domain.conf
elif [ "$n" -eq "3" ];then
echo "3 $domain"
ln -s /var/www/$domain.git/nginx/test3.base.finance.conf /etc/nginx/conf.d/test3.base.finance.conf
fi
