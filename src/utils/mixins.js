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
        emptyImage(src) {
            return src || '../../public/img/cancel.svg'
        },
    }
}
