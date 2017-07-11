<template>
  <div class="article-layout">
    <ul>
      <li class="article-classify" v-for="(item, index) in articleTypeList">
        <router-link to="/article/articleList" class="classify-title">
          <div class="item-inner">
            <div class="item-title">{{item[0].category}}</div>
          </div>
        </router-link>
        <div class="list-block media-list">
          <ul>
            <router-link :to="{ path:'/article/' + data.articleId}" class="item-content" v-for="data in item" tag="li" :key="data.id">
              <div class="item-media"><img :src="data.imgPath" width="55"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">
                    {{data.title}}
                  </div>
                </div>
                <div class="item-subtitle"> {{data.author}}</div>
              </div>
            </router-link>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      articleTypeList: Array
    }
  }
</script>

<style scoped>
  .article-classify, .article-box{
    margin:1rem 0;
    font-size:.85rem;
    min-height: 1.5rem;
    background: #ffffff;
    box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
    position: relative;
    border-radius: 0.1rem;
    box-sizing: border-box;
  }
  .article-classify .list-block{
    margin:0;
  }
  .classify-title{
    padding:0.2rem 0.75rem 0;
    font-size:0.7rem;
    display: block;
    box-sizing: border-box;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    color: inherit;
  }
  .article-classify > .list-block .item-title{
    font-size: 0.8rem;
  }
  .article-classify > .list-block .item-subtitle{
    font-size:0.5rem;
    color: #757677;
  }
  .classify-title > .item-inner{
    padding: 0.1rem 1.5rem 0.1rem 0;
    border-bottom:1px solid #e1e1e1;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM0QzFDNzMyREM0MTFFNUJDNTI4OTMzMEE0RjBENzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM0QzFDNzQyREM0MTFFNUJDNTI4OTMzMEE0RjBENzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QzRDMUM3MTJEQzQxMUU1QkM1Mjg5MzMwQTRGMEQ3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QzRDMUM3MjJEQzQxMUU1QkM1Mjg5MzMwQTRGMEQ3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjs2Bb4AAAItSURBVHjazJhbK0RRGIb3DIOU/AG5kUTOgxmHceFGKf6BO+Vf+E8KKYcYg3FuMpNIDhFJXJAcp/GtvKumrzVs+zBrvfU2u689q6d3rb33+lYgl8tZvymZ3JOX7eQp8gT50fJA0Wj4z3tKbY5VR14hV5ObyWLkZ6sICtq4p4V8CjihevIWucoUQJFUmtUayTvkShMAL5DiGqs3IMlK3YBSgwrIZkBWmAAoIRMKyG2/IIMO/hMjbygepCS53ARAoQHyOqu1YbrLTADMAXJbASmSDOkGlOpTQHaQN72CdAuYBeQuq4cBWaIbUEJGC0Am3UIGPVoqMsk9Vu/CwxTQDSj0iSQPWD2C6Q7oBhT6AmRKAZkwAVDoowBkn+LdqQVQ6A2QhwrIuAmAEjKi2KrF/jPdfgIKveI7Pcfq/eSMCYBSD4pakymA0+RxVrsn15oAOEMeY7Vbcif5ys4ApT7CzZJHWO2G3I1fSyfgPHmY1a7x6bvT/ZpZUMBdOoHzI8El8pCiK+wq8CQXNcFlBdw51tyD00G9SnAVHV++zgDn6hzHiwTjCrgTTKvrQya3Ca5jA5CvY3IP+UlnTxJEb8zhjpDck1cL20mCAcBFWD2D2ovOvjiERojDpTGtnsL9N8EQegt+LJrC5vRN59lMORp0DrePNH2BswvYivXVzuoHSO7dz+2QHcAa6+eMOl87WHOffm8m7QCK7foog+tFi2mZACg3npPkRUxrtkitgvUtwAA5A3LWdzPizwAAAABJRU5ErkJggg==);
    background-size: 0.7rem;
    background-repeat: no-repeat;
    background-position: 97% center;
    background-position: -webkit-calc(100% - .1rem) center;
    background-position: calc(100% - .1rem) center;
  }
  .classify-title .item-inner .item-title{
    padding-left:0.3rem;
    -webkit-flex-shrink: 1;
    -ms-flex: 0 1 auto;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .article-classify .item-content{
    padding:0 0.15rem;
    border-bottom:1px solid #e1e1e1;
  }
  .article-classify .item-content:last-child{
    border-bottom:none;
  }
  .article-classify > .list-block > ul{
    padding:0 0.6rem;
  }
  #article-list .content > img{
    width:100%;
  }
</style>
