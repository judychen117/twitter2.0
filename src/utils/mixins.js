import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}


export const emptyImageFilter = {
  filters: {
    emptyPicture(src) {
      return src || 'https://via.placeholder.com/50x50/C4C4C4/C4C4C4'
    },
    emptyImage(src) {
      return src || 'https://via.placeholder.com/245x140/C4C4C4/C4C4C4'
    },
    emptyCover(src) {
      return src || 'https://via.placeholder.com/245x140/C4C4C4/C4C4C4'
    }

  }
}

export const filterWordCount = {
  filters: {
    filterWordCount(text) {
      if (text.length >= 50) {
        text = text.substring(0, 50) + '...';
        return text
      }
      return text
    }
  }
}

