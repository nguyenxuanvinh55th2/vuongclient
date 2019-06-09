cd ~/projects/tuanvuongit/my-app/
rm -rf dist/*
time npm run build
rsync -av -e "ssh -p 22" dist/. root@fog1.lokatech.net:/var/www/vuongit/static --delete
scp ~/projects/tuanvuongit/my-app/dist/index.html root@fog1.lokatech.net:/var/www/vuongit
