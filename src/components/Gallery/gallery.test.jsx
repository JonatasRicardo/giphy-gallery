import React from 'react';
import { ThemeProvider } from "react-jss";
import {
  render, fireEvent, waitFor, screen
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Gallery from './index';
import themes from '../../themes/main';
import config from '../../config';


const mock = {
  "data": [{
      "type": "gif",
      "id": "UWV1KGPpqErVzTT4Da",
      "url": "https://giphy.com/gifs/bernie2020-bernie-sanders-2020-UWV1KGPpqErVzTT4Da",
      "slug": "bernie2020-bernie-sanders-2020-UWV1KGPpqErVzTT4Da",
      "bitly_gif_url": "https://gph.is/g/EJgBJPQ",
      "bitly_url": "https://gph.is/g/EJgBJPQ",
      "embed_url": "https://giphy.com/embed/UWV1KGPpqErVzTT4Da",
      "username": "bernie2020",
      "source": "berniesanders.com",
      "title": "Smash Feel The Bern GIF by Bernie Sanders",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "berniesanders.com",
      "is_sticker": 0,
      "import_datetime": "2019-11-21 19:18:11",
      "trending_datetime": "2021-01-22 06:15:07",
      "images": {
          "original": {
              "height": "377",
              "width": "480",
              "size": "2754192",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif",
              "mp4_size": "392579",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4",
              "webp_size": "795384",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.webp",
              "frames": "50",
              "hash": "2650e2cd4f42c9474d8b37dc9a91fb6b"
          },
          "downsized": {
              "height": "377",
              "width": "480",
              "size": "1710391",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-downsized.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized.gif"
          },
          "downsized_large": {
              "height": "377",
              "width": "480",
              "size": "2754192",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_medium": {
              "height": "377",
              "width": "480",
              "size": "2754192",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_small": {
              "height": "244",
              "width": "311",
              "mp4_size": "87235",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-downsized-small.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-small.mp4"
          },
          "downsized_still": {
              "height": "377",
              "width": "480",
              "size": "34053",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-downsized_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized_s.gif"
          },
          "fixed_height": {
              "height": "200",
              "width": "255",
              "size": "730751",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.gif",
              "mp4_size": "116605",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.mp4",
              "webp_size": "326922",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.webp"
          },
          "fixed_height_downsampled": {
              "height": "200",
              "width": "255",
              "size": "105086",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.gif",
              "webp_size": "68562",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.webp"
          },
          "fixed_height_small": {
              "height": "100",
              "width": "128",
              "size": "258232",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.gif",
              "mp4_size": "42133",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.mp4",
              "webp_size": "124158",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.webp"
          },
          "fixed_height_small_still": {
              "height": "100",
              "width": "128",
              "size": "5868",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100_s.gif"
          },
          "fixed_height_still": {
              "height": "200",
              "width": "255",
              "size": "15586",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_s.gif"
          },
          "fixed_width": {
              "height": "157",
              "width": "200",
              "size": "526819",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.gif",
              "mp4_size": "77973",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.mp4",
              "webp_size": "229250",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.webp"
          },
          "fixed_width_downsampled": {
              "height": "157",
              "width": "200",
              "size": "71951",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200w_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.gif",
              "webp_size": "44730",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200w_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.webp"
          },
          "fixed_width_small": {
              "height": "79",
              "width": "100",
              "size": "179232",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.gif",
              "mp4_size": "28765",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.mp4",
              "webp_size": "85546",
              "webp": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.webp"
          },
          "fixed_width_small_still": {
              "height": "79",
              "width": "100",
              "size": "4376",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/100w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w_s.gif"
          },
          "fixed_width_still": {
              "height": "157",
              "width": "200",
              "size": "15466",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/200w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_s.gif"
          },
          "looping": {
              "mp4_size": "1851781",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-loop.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-loop.mp4"
          },
          "original_still": {
              "height": "377",
              "width": "480",
              "size": "99937",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "original_mp4": {
              "height": "376",
              "width": "480",
              "mp4_size": "392579",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4"
          },
          "preview": {
              "height": "252",
              "width": "321",
              "mp4_size": "37338",
              "mp4": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-preview.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.mp4"
          },
          "preview_gif": {
              "height": "67",
              "width": "85",
              "size": "49857",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-preview.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.gif"
          },
          "preview_webp": {
              "height": "158",
              "width": "202",
              "size": "46192",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/giphy-preview.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.webp"
          },
          "480w_still": {
              "height": "377",
              "width": "480",
              "size": "2754192",
              "url": "https://media0.giphy.com/media/UWV1KGPpqErVzTT4Da/480w_s.jpg?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=480w_s.jpg"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/bernie2020/CgWzKjvZSmJ2.png",
          "banner_image": "https://media4.giphy.com/headers/bernie2020/ovZE38w4esot.png",
          "banner_url": "https://media4.giphy.com/headers/bernie2020/ovZE38w4esot.png",
          "profile_url": "https://giphy.com/bernie2020/",
          "username": "bernie2020",
          "display_name": "Bernie Sanders",
          "description": "This is the official GIPHY account of the Bernie 2020 campaign.",
          "instagram_url": "https://instagram.com/berniesanders/",
          "website_url": "https://berniesanders.com/",
          "is_verified": true
      },
      "analytics_response_payload": "e=Z2lmX2lkPVVXVjFLR1BwcUVyVnpUVDREYSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTg3NWQwZmU3ajY5eG5keWpwNzh2c2EwaXo2cTJnYzBxd2Yzb2J3NjNhdjhmaHh0",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=UWV1KGPpqErVzTT4Da&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=UWV1KGPpqErVzTT4Da&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=UWV1KGPpqErVzTT4Da&action_type=SENT"
          }
      }
  }, {
      "type": "gif",
      "id": "KoEVUJfIbuMdG7XPSw",
      "url": "https://giphy.com/gifs/olympicchannel-peace-and-love-peacesign-KoEVUJfIbuMdG7XPSw",
      "slug": "olympicchannel-peace-and-love-peacesign-KoEVUJfIbuMdG7XPSw",
      "bitly_gif_url": "https://gph.is/g/aKQ7VAl",
      "bitly_url": "https://gph.is/g/aKQ7VAl",
      "embed_url": "https://giphy.com/embed/KoEVUJfIbuMdG7XPSw",
      "username": "olympics",
      "source": "",
      "title": "Peace Out Wow GIF by Olympics",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2021-01-19 11:37:49",
      "trending_datetime": "2021-01-22 06:15:04",
      "images": {
          "original": {
              "height": "480",
              "width": "480",
              "size": "9560615",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif",
              "mp4_size": "1307930",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4",
              "webp_size": "1952104",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.webp",
              "frames": "107",
              "hash": "11ad42f56343d8b29ef7416f72b3a48e"
          },
          "downsized": {
              "height": "326",
              "width": "326",
              "size": "1605254",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-downsized.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized.gif"
          },
          "downsized_large": {
              "height": "480",
              "width": "480",
              "size": "6439141",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-downsized-large.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-large.gif"
          },
          "downsized_medium": {
              "height": "480",
              "width": "480",
              "size": "4891083",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-downsized-medium.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-medium.gif"
          },
          "downsized_small": {
              "height": "192",
              "width": "192",
              "mp4_size": "151268",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-downsized-small.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-small.mp4"
          },
          "downsized_still": {
              "height": "326",
              "width": "326",
              "size": "32181",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-downsized_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized_s.gif"
          },
          "fixed_height": {
              "height": "200",
              "width": "200",
              "size": "1624489",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.gif",
              "mp4_size": "340045",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.mp4",
              "webp_size": "702402",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.webp"
          },
          "fixed_height_downsampled": {
              "height": "200",
              "width": "200",
              "size": "125155",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.gif",
              "webp_size": "62528",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.webp"
          },
          "fixed_height_small": {
              "height": "100",
              "width": "100",
              "size": "546739",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.gif",
              "mp4_size": "130604",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.mp4",
              "webp_size": "272648",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.webp"
          },
          "fixed_height_small_still": {
              "height": "100",
              "width": "100",
              "size": "6073",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100_s.gif"
          },
          "fixed_height_still": {
              "height": "200",
              "width": "200",
              "size": "17195",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_s.gif"
          },
          "fixed_width": {
              "height": "200",
              "width": "200",
              "size": "1624489",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.gif",
              "mp4_size": "340045",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.mp4",
              "webp_size": "702402",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.webp"
          },
          "fixed_width_downsampled": {
              "height": "200",
              "width": "200",
              "size": "125155",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200w_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.gif",
              "webp_size": "62528",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200w_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.webp"
          },
          "fixed_width_small": {
              "height": "100",
              "width": "100",
              "size": "546739",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.gif",
              "mp4_size": "47837",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.mp4",
              "webp_size": "272648",
              "webp": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.webp"
          },
          "fixed_width_small_still": {
              "height": "100",
              "width": "100",
              "size": "6073",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/100w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w_s.gif"
          },
          "fixed_width_still": {
              "height": "200",
              "width": "200",
              "size": "17195",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/200w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_s.gif"
          },
          "looping": {
              "mp4_size": "2464794",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-loop.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-loop.mp4"
          },
          "original_still": {
              "height": "480",
              "width": "480",
              "size": "98599",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "original_mp4": {
              "height": "480",
              "width": "480",
              "mp4_size": "1307930",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4"
          },
          "preview": {
              "height": "276",
              "width": "276",
              "mp4_size": "38053",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-preview.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.mp4"
          },
          "preview_gif": {
              "height": "72",
              "width": "72",
              "size": "49279",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-preview.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.gif"
          },
          "preview_webp": {
              "height": "146",
              "width": "146",
              "size": "45816",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-preview.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.webp"
          },
          "hd": {
              "height": "1074",
              "width": "1074",
              "mp4_size": "4928765",
              "mp4": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/giphy-hd.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-hd.mp4"
          },
          "480w_still": {
              "height": "480",
              "width": "480",
              "size": "9560615",
              "url": "https://media1.giphy.com/media/KoEVUJfIbuMdG7XPSw/480w_s.jpg?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=480w_s.jpg"
          }
      },
      "user": {
          "avatar_url": "https://media3.giphy.com/avatars/olympics/DQYhyWQwfwm5.jpg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/olympics/",
          "username": "olympics",
          "display_name": "Olympics",
          "description": "The official GIPHY page of the Olympics. Inspiring people through the Olympic values of friendship, respect, and excellence.",
          "instagram_url": "https://instagram.com/olympics",
          "website_url": "http://www.olympic.org",
          "is_verified": true
      },
      "analytics_response_payload": "e=Z2lmX2lkPUtvRVZVSmZJYnVNZEc3WFBTdyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTg3NWQwZmU3ajY5eG5keWpwNzh2c2EwaXo2cTJnYzBxd2Yzb2J3NjNhdjhmaHh0",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=KoEVUJfIbuMdG7XPSw&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=KoEVUJfIbuMdG7XPSw&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=KoEVUJfIbuMdG7XPSw&action_type=SENT"
          }
      }
  }, {
      "type": "gif",
      "id": "ESDrZTpgTXRF8Dbyfv",
      "url": "https://giphy.com/gifs/wikipedia-photography-picture-photo-ESDrZTpgTXRF8Dbyfv",
      "slug": "wikipedia-photography-picture-photo-ESDrZTpgTXRF8Dbyfv",
      "bitly_gif_url": "https://gph.is/g/am1n0gP",
      "bitly_url": "https://gph.is/g/am1n0gP",
      "embed_url": "https://giphy.com/embed/ESDrZTpgTXRF8Dbyfv",
      "username": "wikipedia",
      "source": "",
      "title": "Taking Picture Photography GIF by Wikipedia",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2021-01-13 21:23:29",
      "trending_datetime": "2021-01-22 06:00:09",
      "images": {
          "original": {
              "height": "353",
              "width": "450",
              "size": "755538",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif",
              "mp4_size": "370609",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4",
              "webp_size": "765466",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.webp",
              "frames": "72",
              "hash": "fff55daf63f532830d72a89bdeba6263"
          },
          "downsized": {
              "height": "353",
              "width": "450",
              "size": "755538",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_large": {
              "height": "353",
              "width": "450",
              "size": "755538",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_medium": {
              "height": "353",
              "width": "450",
              "size": "755538",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_small": {
              "height": "262",
              "width": "334",
              "mp4_size": "122929",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy-downsized-small.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-small.mp4"
          },
          "downsized_still": {
              "height": "353",
              "width": "450",
              "size": "755538",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "fixed_height": {
              "height": "200",
              "width": "255",
              "size": "347253",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.gif",
              "mp4_size": "144945",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.mp4",
              "webp_size": "350966",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.webp"
          },
          "fixed_height_downsampled": {
              "height": "200",
              "width": "255",
              "size": "52031",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.gif",
              "webp_size": "53742",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.webp"
          },
          "fixed_height_small": {
              "height": "100",
              "width": "128",
              "size": "144281",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.gif",
              "mp4_size": "57929",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.mp4",
              "webp_size": "135342",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.webp"
          },
          "fixed_height_small_still": {
              "height": "100",
              "width": "128",
              "size": "4449",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100_s.gif"
          },
          "fixed_height_still": {
              "height": "200",
              "width": "255",
              "size": "9296",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_s.gif"
          },
          "fixed_width": {
              "height": "157",
              "width": "200",
              "size": "243955",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.gif",
              "mp4_size": "103886",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.mp4",
              "webp_size": "253112",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.webp"
          },
          "fixed_width_downsampled": {
              "height": "157",
              "width": "200",
              "size": "36969",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200w_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.gif",
              "webp_size": "37858",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200w_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.webp"
          },
          "fixed_width_small": {
              "height": "79",
              "width": "100",
              "size": "100432",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.gif",
              "mp4_size": "41250",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.mp4",
              "webp_size": "96842",
              "webp": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.webp"
          },
          "fixed_width_small_still": {
              "height": "79",
              "width": "100",
              "size": "3396",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/100w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w_s.gif"
          },
          "fixed_width_still": {
              "height": "157",
              "width": "200",
              "size": "7245",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/200w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_s.gif"
          },
          "looping": {
              "mp4_size": "1520846",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy-loop.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-loop.mp4"
          },
          "original_still": {
              "height": "353",
              "width": "450",
              "size": "31125",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "original_mp4": {
              "height": "376",
              "width": "480",
              "mp4_size": "370609",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4"
          },
          "preview": {
              "height": "244",
              "width": "311",
              "mp4_size": "34557",
              "mp4": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy-preview.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.mp4"
          },
          "preview_gif": {
              "height": "98",
              "width": "125",
              "size": "47646",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy-preview.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.gif"
          },
          "preview_webp": {
              "height": "134",
              "width": "170",
              "size": "49914",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/giphy-preview.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.webp"
          },
          "480w_still": {
              "height": "377",
              "width": "480",
              "size": "755538",
              "url": "https://media2.giphy.com/media/ESDrZTpgTXRF8Dbyfv/480w_s.jpg?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=480w_s.jpg"
          }
      },
      "user": {
          "avatar_url": "https://media3.giphy.com/avatars/wikipedia/Nw0P7eaPWn4D.jpg",
          "banner_image": "https://media3.giphy.com/headers/wikipedia/xR18MtFnW5pc.jpg",
          "banner_url": "https://media3.giphy.com/headers/wikipedia/xR18MtFnW5pc.jpg",
          "profile_url": "https://giphy.com/wikipedia/",
          "username": "wikipedia",
          "display_name": "Wikipedia",
          "description": "Let's set knowledge free. ",
          "instagram_url": "https://instagram.com/wikipedia",
          "website_url": "https://wikimediafoundation.org/wikipedia20",
          "is_verified": true
      },
      "analytics_response_payload": "e=Z2lmX2lkPUVTRHJaVHBnVFhSRjhEYnlmdiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTg3NWQwZmU3ajY5eG5keWpwNzh2c2EwaXo2cTJnYzBxd2Yzb2J3NjNhdjhmaHh0",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=ESDrZTpgTXRF8Dbyfv&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=ESDrZTpgTXRF8Dbyfv&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=ESDrZTpgTXRF8Dbyfv&action_type=SENT"
          }
      }
  }, {
      "type": "gif",
      "id": "IdTUJAGPRDR7en4z9B",
      "url": "https://giphy.com/gifs/moodman-IdTUJAGPRDR7en4z9B",
      "slug": "moodman-IdTUJAGPRDR7en4z9B",
      "bitly_gif_url": "https://gph.is/g/4DBWPA9",
      "bitly_url": "https://gph.is/g/4DBWPA9",
      "embed_url": "https://giphy.com/embed/IdTUJAGPRDR7en4z9B",
      "username": "",
      "source": "",
      "title": "Watching The Tea GIF by MOODMAN",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2020-09-16 02:51:03",
      "trending_datetime": "2021-01-22 05:45:12",
      "images": {
          "original": {
              "height": "480",
              "width": "270",
              "size": "2463681",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif",
              "mp4_size": "382216",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4",
              "webp_size": "599460",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.webp",
              "frames": "39",
              "hash": "725145b658d7280a4408a3d5d1dcb227"
          },
          "downsized": {
              "height": "480",
              "width": "270",
              "size": "1477115",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-downsized.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized.gif"
          },
          "downsized_large": {
              "height": "480",
              "width": "270",
              "size": "2463681",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_medium": {
              "height": "480",
              "width": "270",
              "size": "2463681",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_small": {
              "height": "346",
              "width": "194",
              "mp4_size": "97355",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-downsized-small.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-small.mp4"
          },
          "downsized_still": {
              "height": "480",
              "width": "270",
              "size": "38181",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-downsized_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized_s.gif"
          },
          "fixed_height": {
              "height": "200",
              "width": "113",
              "size": "534340",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.gif",
              "mp4_size": "82353",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.mp4",
              "webp_size": "201042",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.webp"
          },
          "fixed_height_downsampled": {
              "height": "200",
              "width": "113",
              "size": "93450",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.gif",
              "webp_size": "41222",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.webp"
          },
          "fixed_height_small": {
              "height": "100",
              "width": "57",
              "size": "135475",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.gif",
              "mp4_size": "32982",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.mp4",
              "webp_size": "84910",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.webp"
          },
          "fixed_height_small_still": {
              "height": "100",
              "width": "57",
              "size": "4455",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100_s.gif"
          },
          "fixed_height_still": {
              "height": "200",
              "width": "113",
              "size": "13582",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_s.gif"
          },
          "fixed_width": {
              "height": "356",
              "width": "200",
              "size": "1074064",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.gif",
              "mp4_size": "206432",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.mp4",
              "webp_size": "408024",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.webp"
          },
          "fixed_width_downsampled": {
              "height": "356",
              "width": "200",
              "size": "179419",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200w_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.gif",
              "webp_size": "101824",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200w_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.webp"
          },
          "fixed_width_small": {
              "height": "178",
              "width": "100",
              "size": "444087",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.gif",
              "mp4_size": "47927",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.mp4",
              "webp_size": "178502",
              "webp": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.webp"
          },
          "fixed_width_small_still": {
              "height": "178",
              "width": "100",
              "size": "10718",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/100w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w_s.gif"
          },
          "fixed_width_still": {
              "height": "356",
              "width": "200",
              "size": "28043",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/200w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_s.gif"
          },
          "looping": {
              "mp4_size": "1358314",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-loop.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-loop.mp4"
          },
          "original_still": {
              "height": "480",
              "width": "270",
              "size": "62879",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "original_mp4": {
              "height": "480",
              "width": "270",
              "mp4_size": "382216",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4"
          },
          "preview": {
              "height": "318",
              "width": "178",
              "mp4_size": "40471",
              "mp4": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-preview.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.mp4"
          },
          "preview_gif": {
              "height": "99",
              "width": "56",
              "size": "48872",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-preview.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.gif"
          },
          "preview_webp": {
              "height": "166",
              "width": "94",
              "size": "42064",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/giphy-preview.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.webp"
          },
          "480w_still": {
              "height": "853",
              "width": "480",
              "size": "2463681",
              "url": "https://media4.giphy.com/media/IdTUJAGPRDR7en4z9B/480w_s.jpg?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=480w_s.jpg"
          }
      },
      "analytics_response_payload": "e=Z2lmX2lkPUlkVFVKQUdQUkRSN2VuNHo5QiZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTg3NWQwZmU3ajY5eG5keWpwNzh2c2EwaXo2cTJnYzBxd2Yzb2J3NjNhdjhmaHh0",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=IdTUJAGPRDR7en4z9B&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=IdTUJAGPRDR7en4z9B&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=IdTUJAGPRDR7en4z9B&action_type=SENT"
          }
      }
  }, {
      "type": "gif",
      "id": "l378o7dYnoHlgH4ha",
      "url": "https://giphy.com/gifs/nba-l378o7dYnoHlgH4ha",
      "slug": "nba-l378o7dYnoHlgH4ha",
      "bitly_gif_url": "http://gph.is/2gf7zlk",
      "bitly_url": "http://gph.is/2gf7zlk",
      "embed_url": "https://giphy.com/embed/l378o7dYnoHlgH4ha",
      "username": "nba",
      "source": "http://nba.com",
      "title": "Utah Jazz Slow Clap GIF by NBA",
      "rating": "g",
      "content_url": "",
      "source_tld": "nba.com",
      "source_post_url": "http://nba.com",
      "is_sticker": 0,
      "import_datetime": "2017-10-05 20:44:15",
      "trending_datetime": "2021-01-22 05:30:58",
      "images": {
          "original": {
              "height": "270",
              "width": "480",
              "size": "1899706",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif",
              "mp4_size": "245730",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4",
              "webp_size": "440886",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.webp",
              "frames": "45",
              "hash": "54d3afa6549b2a4c74bbbac4b9621454"
          },
          "downsized": {
              "height": "270",
              "width": "480",
              "size": "1899706",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_large": {
              "height": "270",
              "width": "480",
              "size": "1899706",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_medium": {
              "height": "270",
              "width": "480",
              "size": "1899706",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_small": {
              "height": "198",
              "width": "352",
              "mp4_size": "63860",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy-downsized-small.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-small.mp4"
          },
          "downsized_still": {
              "height": "270",
              "width": "480",
              "size": "1899706",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "fixed_height": {
              "height": "200",
              "width": "356",
              "size": "903871",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.gif",
              "mp4_size": "137221",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.mp4",
              "webp_size": "285428",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.webp"
          },
          "fixed_height_downsampled": {
              "height": "200",
              "width": "356",
              "size": "124376",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.gif",
              "webp_size": "64328",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.webp"
          },
          "fixed_height_small": {
              "height": "100",
              "width": "178",
              "size": "271615",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.gif",
              "mp4_size": "49473",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.mp4",
              "webp_size": "97446",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.webp"
          },
          "fixed_height_small_still": {
              "height": "100",
              "width": "178",
              "size": "7193",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100_s.gif"
          },
          "fixed_height_still": {
              "height": "200",
              "width": "356",
              "size": "20635",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_s.gif"
          },
          "fixed_width": {
              "height": "113",
              "width": "200",
              "size": "344642",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.gif",
              "mp4_size": "55223",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.mp4",
              "webp_size": "114056",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.webp"
          },
          "fixed_width_downsampled": {
              "height": "113",
              "width": "200",
              "size": "47481",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200w_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.gif",
              "webp_size": "25552",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200w_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.webp"
          },
          "fixed_width_small": {
              "height": "57",
              "width": "100",
              "size": "105834",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.gif",
              "mp4_size": "20108",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.mp4",
              "webp_size": "41586",
              "webp": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.webp"
          },
          "fixed_width_small_still": {
              "height": "57",
              "width": "100",
              "size": "3188",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/100w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w_s.gif"
          },
          "fixed_width_still": {
              "height": "113",
              "width": "200",
              "size": "9711",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/200w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_s.gif"
          },
          "looping": {
              "mp4_size": "2977648",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy-loop.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-loop.mp4"
          },
          "original_still": {
              "height": "270",
              "width": "480",
              "size": "61151",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "original_mp4": {
              "height": "270",
              "width": "480",
              "mp4_size": "245730",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4"
          },
          "preview": {
              "height": "108",
              "width": "192",
              "mp4_size": "22051",
              "mp4": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy-preview.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.mp4"
          },
          "preview_gif": {
              "height": "94",
              "width": "167",
              "size": "49797",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy-preview.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.gif"
          },
          "preview_webp": {
              "height": "116",
              "width": "206",
              "size": "43156",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/giphy-preview.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.webp"
          },
          "480w_still": {
              "height": "270",
              "width": "480",
              "size": "1899706",
              "url": "https://media2.giphy.com/media/l378o7dYnoHlgH4ha/480w_s.jpg?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=480w_s.jpg"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/nba/GPeEGlo2uy2Z.jpg",
          "banner_image": "https://media4.giphy.com/channel_assets/nba/NFir0YzR4xTg.GIF",
          "banner_url": "https://media4.giphy.com/channel_assets/nba/NFir0YzR4xTg.GIF",
          "profile_url": "https://giphy.com/nba/",
          "username": "nba",
          "display_name": "NBA",
          "description": "This is the official NBA channel on GIPHY. All of the basketball GIFS!!  NBA Season Starts Christmas Week with Games Beginning Tuesday, December 22!",
          "instagram_url": "https://instagram.com/nba",
          "website_url": "",
          "is_verified": true
      },
      "analytics_response_payload": "e=Z2lmX2lkPWwzNzhvN2RZbm9IbGdINGhhJmV2ZW50X3R5cGU9R0lGX1RSRU5ESU5HJmNpZD1hODc1ZDBmZTdqNjl4bmR5anA3OHZzYTBpejZxMmdjMHF3ZjNvYnc2M2F2OGZoeHQ",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=l378o7dYnoHlgH4ha&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=l378o7dYnoHlgH4ha&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=l378o7dYnoHlgH4ha&action_type=SENT"
          }
      }
  }, {
      "type": "gif",
      "id": "U5aTN7dX9aFrr2uuj8",
      "url": "https://giphy.com/gifs/chuber-U5aTN7dX9aFrr2uuj8",
      "slug": "chuber-U5aTN7dX9aFrr2uuj8",
      "bitly_gif_url": "https://gph.is/g/4wA6gjO",
      "bitly_url": "https://gph.is/g/4wA6gjO",
      "embed_url": "https://giphy.com/embed/U5aTN7dX9aFrr2uuj8",
      "username": "chuber",
      "source": "https://media.giphy.com/media/l0K4m0mzkJDAIdhHW/giphy.gif",
      "title": "We Did It Congratulations GIF by chuber channel",
      "rating": "g",
      "content_url": "",
      "source_tld": "media.giphy.com",
      "source_post_url": "https://media.giphy.com/media/l0K4m0mzkJDAIdhHW/giphy.gif",
      "is_sticker": 0,
      "import_datetime": "2020-05-15 14:33:42",
      "trending_datetime": "2021-01-22 05:30:05",
      "images": {
          "original": {
              "height": "270",
              "width": "480",
              "size": "1653988",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif",
              "mp4_size": "302608",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4",
              "webp_size": "486780",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.webp",
              "frames": "20",
              "hash": "1f704733052c9e545158aeec8d586654"
          },
          "downsized": {
              "height": "270",
              "width": "480",
              "size": "1653988",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_large": {
              "height": "270",
              "width": "480",
              "size": "1653988",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_medium": {
              "height": "270",
              "width": "480",
              "size": "1653988",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.gif"
          },
          "downsized_small": {
              "height": "218",
              "width": "387",
              "mp4_size": "112892",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy-downsized-small.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-downsized-small.mp4"
          },
          "downsized_still": {
              "height": "270",
              "width": "480",
              "size": "1653988",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "fixed_height": {
              "height": "200",
              "width": "356",
              "size": "727799",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.gif",
              "mp4_size": "173143",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.mp4",
              "webp_size": "324302",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200.webp"
          },
          "fixed_height_downsampled": {
              "height": "200",
              "width": "356",
              "size": "224540",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.gif",
              "webp_size": "134220",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_d.webp"
          },
          "fixed_height_small": {
              "height": "100",
              "width": "178",
              "size": "248165",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.gif",
              "mp4_size": "67093",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.mp4",
              "webp_size": "126064",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100.webp"
          },
          "fixed_height_small_still": {
              "height": "100",
              "width": "178",
              "size": "14285",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100_s.gif"
          },
          "fixed_height_still": {
              "height": "200",
              "width": "356",
              "size": "39604",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200_s.gif"
          },
          "fixed_width": {
              "height": "113",
              "width": "200",
              "size": "315608",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.gif",
              "mp4_size": "73979",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.mp4",
              "webp_size": "146926",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w.webp"
          },
          "fixed_width_downsampled": {
              "height": "113",
              "width": "200",
              "size": "90695",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200w_d.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.gif",
              "webp_size": "52076",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200w_d.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_d.webp"
          },
          "fixed_width_small": {
              "height": "57",
              "width": "100",
              "size": "89235",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100w.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.gif",
              "mp4_size": "29610",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100w.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.mp4",
              "webp_size": "54414",
              "webp": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100w.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w.webp"
          },
          "fixed_width_small_still": {
              "height": "57",
              "width": "100",
              "size": "5401",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/100w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=100w_s.gif"
          },
          "fixed_width_still": {
              "height": "113",
              "width": "200",
              "size": "17856",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/200w_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=200w_s.gif"
          },
          "looping": {
              "mp4_size": "3193727",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy-loop.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-loop.mp4"
          },
          "original_still": {
              "height": "270",
              "width": "480",
              "size": "84380",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy_s.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy_s.gif"
          },
          "original_mp4": {
              "height": "270",
              "width": "480",
              "mp4_size": "302608",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy.mp4"
          },
          "preview": {
              "height": "108",
              "width": "192",
              "mp4_size": "42513",
              "mp4": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy-preview.mp4?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.mp4"
          },
          "preview_gif": {
              "height": "52",
              "width": "92",
              "size": "49560",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy-preview.gif?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.gif"
          },
          "preview_webp": {
              "height": "74",
              "width": "132",
              "size": "41026",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/giphy-preview.webp?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=giphy-preview.webp"
          },
          "480w_still": {
              "height": "270",
              "width": "480",
              "size": "1653988",
              "url": "https://media0.giphy.com/media/U5aTN7dX9aFrr2uuj8/480w_s.jpg?cid=a875d0fe7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&rid=480w_s.jpg"
          }
      },
      "user": {
          "avatar_url": "https://media4.giphy.com/avatars/chuber/GmiJcdTlt4ug.jpeg",
          "banner_image": "",
          "banner_url": "",
          "profile_url": "https://giphy.com/chuber/",
          "username": "chuber",
          "display_name": "chuber channel",
          "description": "Can't stop\r\nWon't stop\r\nPlease stop",
          "instagram_url": "https://instagram.com/chuberization",
          "website_url": "https://giphy.com/chuber",
          "is_verified": false
      },
      "analytics_response_payload": "e=Z2lmX2lkPVU1YVRON2RYOWFGcnIydXVqOCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9YTg3NWQwZmU3ajY5eG5keWpwNzh2c2EwaXo2cTJnYzBxd2Yzb2J3NjNhdjhmaHh0",
      "analytics": {
          "onload": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=U5aTN7dX9aFrr2uuj8&action_type=SEEN"
          },
          "onclick": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=U5aTN7dX9aFrr2uuj8&action_type=CLICK"
          },
          "onsent": {
              "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt&event_type=GIF_TRENDING&gif_id=U5aTN7dX9aFrr2uuj8&action_type=SENT"
          }
      }

  }],
  "pagination": {
      "total_count": 108957,
      "count": 6,
      "offset": 0
  },
  "meta": {
      "status": 200,
      "msg": "OK",
      "response_id": "7j69xndyjp78vsa0iz6q2gc0qwf3obw63av8fhxt"
  }
};

const server = setupServer(
  rest.get(config.GIPHY_URL, (req, res, ctx) => {
    return res(ctx.json(mock))
  }),
)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Gallery />
    </ThemeProvider>
  );

test('should match snapshot', async () => {
  let container;
  act(() => {
    container = renderComponent({ theme: themes });
  });
  const { asFragment } = container;
  await waitFor(() => screen.getAllByTestId('image-container'))

  expect(asFragment()).toMatchSnapshot()
});

test('should open and close modal', async () => {
  let container;
  act(() => {
    container = renderComponent({ theme: themes });
  });
  const { getAllByTestId } = container;
  await waitFor(() => getAllByTestId('button-open-modal'))

  fireEvent.click(getAllByTestId('button-open-modal')[0]);
  await waitFor(() => getAllByTestId('modal'));
  expect(screen.getByTestId('modal')).toHaveClass('is-open');

  fireEvent.click(screen.getByTestId('button-close-modal'));
  expect(screen.queryByTestId('modal')).toBeNull()

});

test('should close modal on overlay click', async () => {
  let container;
  act(() => {
    container = renderComponent({ theme: themes });
  });
  const { getAllByTestId } = container;
  await waitFor(() => getAllByTestId('button-open-modal'))

  fireEvent.click(getAllByTestId('button-open-modal')[0]);
  await waitFor(() => getAllByTestId('modal'));
  expect(screen.getByTestId('modal')).toHaveClass('is-open');

  fireEvent.click(screen.getByTestId('overlay-modal'));
  expect(screen.queryByTestId('modal')).toBeNull()
});
