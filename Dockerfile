FROM nginx:1.15.9-alpine
COPY  storybook-dist/ /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
