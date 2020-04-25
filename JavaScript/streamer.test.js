
const Streamer = require('./streamer');

MOCKED_RESPONSE_TIME = {
    "week_number": 17,
    "utc_offset": "-04:00",
    "utc_datetime": "2020-04-22T13:25:29.778314+00:00",
    "unixtime": 1587561929,
    "timezone": "America/Toronto",
    "raw_offset": -18000,
    "dst_until": "2020-11-01T06:00:00+00:00",
    "dst_offset": 3600,
    "dst_from": "2020-03-08T07:00:00+00:00",
    "dst": true,
    "day_of_year": 113,
    "day_of_week": 3,
    "datetime": "2020-04-22T09:25:29.778314-04:00",
    "client_ip": "70.51.173.230",
    "abbreviation": "EDT"
}

test('Modify only instance', () => {
      let streamer = new Streamer();
      let time = jest.spyOn(streamer, 'getContent').mockImplementation(() => (MOCKED_RESPONSE_TIME));
  
      expect(streamer.getContent()).toBe(MOCKED_RESPONSE_TIME);
      expect(streamer.bla()).toBe("bla");
      streamer.getContent()

// test = streamer.getContent()
//       console.log(test);

      // unnecessary in this case, putting it here just to illustrate how to "unmock" a method
    //   spy.mockRestore();
  });