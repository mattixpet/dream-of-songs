// Data for audio

(function () {

'use strict';

var audio_data = [
	// format
	// {
	//     'name' : readable song name, (string)
	//     'url' : 'relative path of file',
	//     'year' : closest we have to year of creation, (integer)
	//     'duration' : duration in minutes:seconds, (string)
	//     'cover' : boolean
	// }, etc.
	// Where name is a readable name as a string
	// url is the path to the file usable on a domain (e.g. matthiaspetursson.com/songs/url)
	// Year is the closest I could find to the actual year I created the song
	// Duration is the duration of the song in minutes:seconds as a string
	// Cover indicates if the song was written by someone else (true if so)
	// e.g.
	{
		'name' : 'boom meira flipp (cover)',
		'url' : 'Lelegar_upptokur/2011/boom meira flipp (cover).m4a',
		'year' : 2011,
		'duration' : '1:06',
		'cover' : true
	},
	{
		'name' : 'casual_KORG (A78)',
		'url' : 'Lelegar_upptokur/2011/casual_KORG (A78).m4a',
		'year' : 2011,
		'duration' : '1:59',
		'cover' : false
	},
	{
		'name' : 'cmoll a-bass cdúr millikeflz',
		'url' : 'Lelegar_upptokur/2011/cmoll a-bass cdúr millikeflz.m4a',
		'year' : 2011,
		'duration' : '2:52',
		'cover' : false
	},
	{
		'name' : 'dabb barabb babb babb barabb (A66)',
		'url' : 'Lelegar_upptokur/2011/dabb barabb babb babb barabb (A66).m4a',
		'year' : 2011,
		'duration' : '2:58',
		'cover' : false
	},
	{
		'name' : 'demo af synth shitti',
		'url' : 'Lelegar_upptokur/2011/demo af synth shitti.m4a',
		'year' : 2011,
		'duration' : '6:40',
		'cover' : false
	},
	{
		'name' : 'f mollz, sax sólz',
		'url' : 'Lelegar_upptokur/2011/f mollz, sax sólz.m4a',
		'year' : 2011,
		'duration' : '1:10',
		'cover' : false
	},
	{
		'name' : 'fm belfast flipp (cover)',
		'url' : 'Lelegar_upptokur/2011/fm belfast flipp (cover).m4a',
		'year' : 2011,
		'duration' : '3:06',
		'cover' : true
	},
	{
		'name' : 'fmoll bass flepp',
		'url' : 'Lelegar_upptokur/2011/fmoll bass flepp.m4a',
		'year' : 2011,
		'duration' : '2:08',
		'cover' : false
	},
	{
		'name' : 'grateful_matti_13.02.2010',
		'url' : 'Lelegar_upptokur/2011/grateful_matti_13.02.2010.m4a',
		'year' : 2010,
		'duration' : '1:08',
		'cover' : false
	},
	{
		'name' : 'human after all yamaha DGX-220 (cover)',
		'url' : 'Lelegar_upptokur/2011/human after all yamaha DGX-220 (cover).m4a',
		'year' : 2011,
		'duration' : '1:48',
		'cover' : true
	},
	{
		'name' : 'lolCmollsamaogcubase',
		'url' : 'Lelegar_upptokur/2011/lolCmollsamaogcubase.m4a',
		'year' : 2011,
		'duration' : '2:23',
		'cover' : false
	},
	{
		'name' : 'orgel_matti_13.02.2010',
		'url' : 'Lelegar_upptokur/2011/orgel_matti_13.02.2010.m4a',
		'year' : 2010,
		'duration' : '3:46',
		'cover' : false
	},
	{
		'name' : 'piano fmoll gdúr',
		'url' : 'Lelegar_upptokur/2011/piano fmoll gdúr.m4a',
		'year' : 2011,
		'duration' : '1:53',
		'cover' : false
	},
	{
		'name' : 'piano-bassi-c-moll-dust',
		'url' : 'Lelegar_upptokur/2011/piano-bassi-c-moll-dust.m4a',
		'year' : 2011,
		'duration' : '0:47',
		'cover' : false
	},
	{
		'name' : 'random f moll sax shit',
		'url' : 'Lelegar_upptokur/2011/random f moll sax shit.m4a',
		'year' : 2011,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'saucerful of secrets organ (cover)',
		'url' : 'Lelegar_upptokur/2011/saucerful of secrets organ (cover).m4a',
		'year' : 2011,
		'duration' : '3:49',
		'cover' : true
	},
	{
		'name' : 'skúr protoman',
		'url' : 'Lelegar_upptokur/2011/skúr protoman.m4a',
		'year' : 2011,
		'duration' : '0:36',
		'cover' : false
	},
	{
		'name' : 'wtf_man',
		'url' : 'Lelegar_upptokur/2011/wtf_man.m4a',
		'year' : 2011,
		'duration' : '2:13',
		'cover' : false
	},
	{
		'name' : 'american_psycho',
		'url' : 'Lelegar_upptokur/amr/2014/american_psycho.m4a',
		'year' : 2014,
		'duration' : '2:58',
		'cover' : false
	},
	{
		'name' : 'anna',
		'url' : 'Lelegar_upptokur/amr/2014/anna.m4a',
		'year' : 2014,
		'duration' : '2:12',
		'cover' : false
	},
	{
		'name' : 'blackbird_rodd (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/blackbird_rodd (cover).m4a',
		'year' : 2014,
		'duration' : '1:04',
		'cover' : true
	},
	{
		'name' : 'brynjar_ekkisvogott',
		'url' : 'Lelegar_upptokur/amr/2014/brynjar_ekkisvogott.m4a',
		'year' : 2014,
		'duration' : '6:21',
		'cover' : false
	},
	{
		'name' : 'BRYNJAR_ja_2013',
		'url' : 'Lelegar_upptokur/amr/2014/BRYNJAR_ja_2013.m4a',
		'year' : 2013,
		'duration' : '8:25',
		'cover' : false
	},
	{
		'name' : 'fallegt_orgel_bjart',
		'url' : 'Lelegar_upptokur/amr/2014/fallegt_orgel_bjart.m4a',
		'year' : 2014,
		'duration' : '2:32',
		'cover' : false
	},
	{
		'name' : 'hero_drunk (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/hero_drunk (cover).m4a',
		'year' : 2014,
		'duration' : '0:26',
		'cover' : true
	},
	{
		'name' : 'kathryn',
		'url' : 'Lelegar_upptokur/amr/2014/kathryn.m4a',
		'year' : 2014,
		'duration' : '8:28',
		'cover' : false
	},
	{
		'name' : 'kosi_piano',
		'url' : 'Lelegar_upptokur/amr/2014/kosi_piano.m4a',
		'year' : 2014,
		'duration' : '4:29',
		'cover' : false
	},
	{
		'name' : 'Lagahugm',
		'url' : 'Lelegar_upptokur/amr/2014/Lagahugm.m4a',
		'year' : 2014,
		'duration' : '2:17',
		'cover' : false
	},
	{
		'name' : 'ominous',
		'url' : 'Lelegar_upptokur/amr/2014/ominous.m4a',
		'year' : 2014,
		'duration' : '1:55',
		'cover' : false
	},
	{
		'name' : 'REC_0012',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0012.m4a',
		'year' : 2014,
		'duration' : '0:18',
		'cover' : false
	},
	{
		'name' : 'REC_0023',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0023.m4a',
		'year' : 2014,
		'duration' : '4:24',
		'cover' : false
	},
	{
		'name' : 'REC_0024',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0024.m4a',
		'year' : 2014,
		'duration' : '1:59',
		'cover' : false
	},
	{
		'name' : 'REC_0025',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0025.m4a',
		'year' : 2014,
		'duration' : '1:38',
		'cover' : false
	},
	{
		'name' : 'REC_0030',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0030.m4a',
		'year' : 2014,
		'duration' : '2:12',
		'cover' : false
	},
	{
		'name' : 'REC_0031',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0031.m4a',
		'year' : 2014,
		'duration' : '2:32',
		'cover' : false
	},
	{
		'name' : 'somewhere_over_the_gt_sg (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/somewhere_over_the_gt_sg (cover).m4a',
		'year' : 2014,
		'duration' : '4:00',
		'cover' : true
	},
	{
		'name' : 'tango_spurningarmerki',
		'url' : 'Lelegar_upptokur/amr/2014/tango_spurningarmerki.m4a',
		'year' : 2014,
		'duration' : '3:24',
		'cover' : false
	},
	{
		'name' : 'The_lord_is_my_shepherd',
		'url' : 'Lelegar_upptokur/amr/2014/The_lord_is_my_shepherd.m4a',
		'year' : 2014,
		'duration' : '1:28',
		'cover' : false
	},
	{
		'name' : 'thu_komst_vid_hjartad_asta_songur (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/thu_komst_vid_hjartad_asta_songur (cover).m4a',
		'year' : 2014,
		'duration' : '3:58',
		'cover' : true
	},
	{
		'name' : 'wots_uh_enn_meira_falskt (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/wots_uh_enn_meira_falskt (cover).m4a',
		'year' : 2014,
		'duration' : '4:33',
		'cover' : true
	},
	{
		'name' : 'wots_uh_the_deal_nokk_falskt (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/wots_uh_the_deal_nokk_falskt (cover).m4a',
		'year' : 2014,
		'duration' : '4:20',
		'cover' : true
	},
	{
		'name' : 'ali_guitar',
		'url' : 'Lelegar_upptokur/iowa/2014/ali_guitar.m4a',
		'year' : 2014,
		'duration' : '4:38',
		'cover' : false
	},
	{
		'name' : 'ali_moreSongur',
		'url' : 'Lelegar_upptokur/iowa/2014/ali_moreSongur.m4a',
		'year' : 2014,
		'duration' : '8:31',
		'cover' : false
	},
	{
		'name' : 'ali_songur',
		'url' : 'Lelegar_upptokur/iowa/2014/ali_songur.m4a',
		'year' : 2014,
		'duration' : '1:24',
		'cover' : false
	},
	{
		'name' : 'bend_guitar',
		'url' : 'Lelegar_upptokur/iowa/2014/bend_guitar.m4a',
		'year' : 2014,
		'duration' : '1:46',
		'cover' : false
	},
	{
		'name' : 'birds',
		'url' : 'Lelegar_upptokur/iowa/2014/birds.m4a',
		'year' : 2014,
		'duration' : '0:18',
		'cover' : false
	},
	{
		'name' : 'clichechordsweirdrythm',
		'url' : 'Lelegar_upptokur/iowa/2014/clichechordsweirdrythm.m4a',
		'year' : 2014,
		'duration' : '3:18',
		'cover' : false
	},
	{
		'name' : 'cosy piano',
		'url' : 'Lelegar_upptokur/iowa/2014/cosy piano.m4a',
		'year' : 2014,
		'duration' : '3:03',
		'cover' : false
	},
	{
		'name' : 'ominous_stanley',
		'url' : 'Lelegar_upptokur/iowa/2014/ominous_stanley.m4a',
		'year' : 2014,
		'duration' : '7:52',
		'cover' : false
	},
	{
		'name' : 'rythm guitar',
		'url' : 'Lelegar_upptokur/iowa/2014/rythm guitar.m4a',
		'year' : 2014,
		'duration' : '1:33',
		'cover' : false
	},
	{
		'name' : 'Voice 010',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 010.m4a',
		'year' : 2014,
		'duration' : '0:11',
		'cover' : false
	},
	{
		'name' : 'Voice 012',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 012.m4a',
		'year' : 2014,
		'duration' : '0:09',
		'cover' : false
	},
	{
		'name' : 'Voice 015',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 015.m4a',
		'year' : 2014,
		'duration' : '2:02',
		'cover' : false
	},
	{
		'name' : 'Voice 016',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 016.m4a',
		'year' : 2014,
		'duration' : '1:01',
		'cover' : false
	},
	{
		'name' : 'Voice 018',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 018.m4a',
		'year' : 2014,
		'duration' : '1:44',
		'cover' : false
	},
	{
		'name' : 'Voice 008',
		'url' : 'Lelegar_upptokur/jan2015/Voice 008.m4a',
		'year' : 2015,
		'duration' : '1:38',
		'cover' : false
	},
	{
		'name' : 'Voice 009',
		'url' : 'Lelegar_upptokur/jan2015/Voice 009.m4a',
		'year' : 2015,
		'duration' : '0:37',
		'cover' : false
	},
	{
		'name' : 'Voice 010',
		'url' : 'Lelegar_upptokur/jan2015/Voice 010.m4a',
		'year' : 2015,
		'duration' : '2:50',
		'cover' : false
	},
	{
		'name' : 'Voice 011',
		'url' : 'Lelegar_upptokur/jan2015/Voice 011.m4a',
		'year' : 2015,
		'duration' : '3:51',
		'cover' : false
	},
	{
		'name' : 'afmæli',
		'url' : 'Lelegar_upptokur/jun2015/afmæli.m4a',
		'year' : 2015,
		'duration' : '1:54',
		'cover' : false
	},
	{
		'name' : 'Voice 012',
		'url' : 'Lelegar_upptokur/jun2015/Voice 012.m4a',
		'year' : 2015,
		'duration' : '0:39',
		'cover' : false
	},
	{
		'name' : 'Voice 013',
		'url' : 'Lelegar_upptokur/jun2015/Voice 013.m4a',
		'year' : 2015,
		'duration' : '0:25',
		'cover' : false
	},
	{
		'name' : 'Voice 014',
		'url' : 'Lelegar_upptokur/jun2015/Voice 014.m4a',
		'year' : 2015,
		'duration' : '2:01',
		'cover' : false
	},
	{
		'name' : 'Voice 015',
		'url' : 'Lelegar_upptokur/jun2015/Voice 015.m4a',
		'year' : 2015,
		'duration' : '0:36',
		'cover' : false
	},
	{
		'name' : 'Voice 016',
		'url' : 'Lelegar_upptokur/jun2015/Voice 016.m4a',
		'year' : 2015,
		'duration' : '1:18',
		'cover' : false
	},
	{
		'name' : 'Voice 020 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 020 (cover).m4a',
		'year' : 2015,
		'duration' : '1:54',
		'cover' : true
	},
	{
		'name' : 'Voice 021',
		'url' : 'Lelegar_upptokur/jun2015/Voice 021.m4a',
		'year' : 2015,
		'duration' : '3:52',
		'cover' : false
	},
	{
		'name' : 'Voice 022',
		'url' : 'Lelegar_upptokur/jun2015/Voice 022.m4a',
		'year' : 2015,
		'duration' : '4:09',
		'cover' : false
	},
	{
		'name' : 'Voice 023 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 023 (cover).m4a',
		'year' : 2015,
		'duration' : '4:13',
		'cover' : true
	},
	{
		'name' : 'Voice 024',
		'url' : 'Lelegar_upptokur/jun2015/Voice 024.m4a',
		'year' : 2015,
		'duration' : '1:21',
		'cover' : false
	},
	{
		'name' : 'Voice 025',
		'url' : 'Lelegar_upptokur/jun2015/Voice 025.m4a',
		'year' : 2015,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'Voice 026 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 026 (cover).m4a',
		'year' : 2015,
		'duration' : '3:37',
		'cover' : true
	},
	{
		'name' : 'Voice 027 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 027 (cover).m4a',
		'year' : 2015,
		'duration' : '3:36',
		'cover' : true
	},
	{
		'name' : 'Voice 028',
		'url' : 'Lelegar_upptokur/jun2015/Voice 028.m4a',
		'year' : 2015,
		'duration' : '0:27',
		'cover' : false
	},
	{
		'name' : 'Voice 029 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 029 (cover).m4a',
		'year' : 2015,
		'duration' : '0:16',
		'cover' : true
	},
	{
		'name' : 'Voice 030',
		'url' : 'Lelegar_upptokur/jun2015/Voice 030.m4a',
		'year' : 2015,
		'duration' : '3:32',
		'cover' : false
	},
	{
		'name' : 'Voice 031',
		'url' : 'Lelegar_upptokur/jun2015/Voice 031.m4a',
		'year' : 2015,
		'duration' : '3:09',
		'cover' : false
	},
	{
		'name' : 'Voice 032',
		'url' : 'Lelegar_upptokur/jun2015/Voice 032.m4a',
		'year' : 2015,
		'duration' : '1:31',
		'cover' : false
	},
	{
		'name' : 'Voice 033',
		'url' : 'Lelegar_upptokur/jun2015/Voice 033.m4a',
		'year' : 2015,
		'duration' : '3:18',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-23 11-12-33',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-23 11-12-33.m4a',
		'year' : 2016,
		'duration' : '1:40',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-25 00-53-04',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-25 00-53-04.m4a',
		'year' : 2016,
		'duration' : '0:50',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 00-41-38',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 00-41-38.m4a',
		'year' : 2016,
		'duration' : '6:31',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 00-51-47',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 00-51-47.m4a',
		'year' : 2016,
		'duration' : '3:47',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 01-07-22',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 01-07-22.m4a',
		'year' : 2016,
		'duration' : '0:53',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 15-30-00',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 15-30-00.m4a',
		'year' : 2016,
		'duration' : '4:25',
		'cover' : false
	},
	{
		'name' : 'HARDCORESHIT',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/HARDCORESHIT.m4a',
		'year' : 2016,
		'duration' : '1:38',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-08-05 12-50-40',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-08-05 12-50-40.m4a',
		'year' : 2016,
		'duration' : '3:39',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-08-12 11-50-11',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-08-12 11-50-11.m4a',
		'year' : 2016,
		'duration' : '4:58',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-08-12 11-57-09',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-08-12 11-57-09.m4a',
		'year' : 2016,
		'duration' : '2:22',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-02 13-13-27',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-10-02 13-13-27.m4a',
		'year' : 2016,
		'duration' : '0:35',
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-06 23-01-38',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-10-06 23-01-38.m4a',
		'year' : 2016,
		'duration' : '1:17',
		'cover' : false
	},
	{
		'name' : 'mattahugmynd0',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/mattahugmynd0.m4a',
		'year' : 2016,
		'duration' : '5:58',
		'cover' : false
	},
	{
		'name' : 'mattahugmynd1',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/mattahugmynd1.m4a',
		'year' : 2016,
		'duration' : '5:13',
		'cover' : false
	},
	{
		'name' : 'mattahugmynd2',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/mattahugmynd2.m4a',
		'year' : 2016,
		'duration' : '2:55',
		'cover' : false
	},
	{
		'name' : 'fells good',
		'url' : 'Lelegar_upptokur/Nexus5X/16.nóv.2017/2017_11_04_01_00_20 fells good.m4a',
		'year' : 2017,
		'duration' : '4:07',
		'cover' : false
	},
	{
		'name' : 'the hills of madness',
		'url' : 'Lelegar_upptokur/Nexus5X/16.nóv.2017/2017_11_05_15_12_40 the hills of madness.m4a',
		'year' : 2017,
		'duration' : '4:37',
		'cover' : false
	},
	{
		'name' : 'brotafgömlu',
		'url' : 'Lelegar_upptokur/Nexus5X/16.nóv.2017/2017_11_13_15_15_50brotafgömlu.m4a',
		'year' : 2017,
		'duration' : '1:04',
		'cover' : false
	},
	{
		'name' : 'a cool clearing',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_03_05_12_13_56a cool clearing.m4a',
		'year' : 2020,
		'duration' : '4:25',
		'cover' : false
	},
	{
		'name' : 'kall með staf',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_03_10_10_34_16 kall með staf.m4a',
		'year' : 2020,
		'duration' : '3:31',
		'cover' : false
	},
	{
		'name' : 'Bryndís sóló hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_02_20_49_44 Bryndís sóló hugmynd.m4a',
		'year' : 2020,
		'duration' : '2:13',
		'cover' : false
	},
	{
		'name' : 'Bryndís sóló hugmynd 2',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_02_20_56_35 Bryndís sóló hugmynd 2.m4a',
		'year' : 2020,
		'duration' : '2:27',
		'cover' : false
	},
	{
		'name' : 'Bryndís sóló hugmynd 3',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_02_20_59_46 Bryndís sóló hugmynd 3.m4a',
		'year' : 2020,
		'duration' : '2:16',
		'cover' : false
	},
	{
		'name' : 'Bryndís sóló hugmynd 4',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_02_21_08_26 Bryndís sóló hugmynd 4.m4a',
		'year' : 2020,
		'duration' : '2:00',
		'cover' : false
	},
	{
		'name' : 'Bryndís juicy hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_03_10_11_06 Bryndís juicy hugmynd.m4a',
		'year' : 2020,
		'duration' : '2:23',
		'cover' : false
	},
	{
		'name' : 'Þórunn alternative hug',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_04_16_32_25 Þórunn alternative hug.m4a',
		'year' : 2020,
		'duration' : '5:13',
		'cover' : false
	},
	{
		'name' : 'uuuuuhu',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_09_15_48_11 uuuuuhu.m4a',
		'year' : 2020,
		'duration' : '1:12',
		'cover' : false
	},
	{
		'name' : 'Þórunn vs 2',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_11_19_24_18 Þórunn vs 2.m4a',
		'year' : 2020,
		'duration' : '4:11',
		'cover' : false
	},
	{
		'name' : 'Þórunn v22',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_11_19_29_07 Þórunn v22.m4a',
		'year' : 2020,
		'duration' : '2:12',
		'cover' : false
	},
	{
		'name' : 'kathryn endir test',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_12_21_18_15 kathryn endir test.m4a',
		'year' : 2020,
		'duration' : '0:26',
		'cover' : false
	},
	{
		'name' : 'Þórunn vs 23',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_12_21_46_13 Þórunn vs 23.m4a',
		'year' : 2020,
		'duration' : '1:37',
		'cover' : false
	},
	{
		'name' : 'Þórunn hugm 24',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_12_21_51_52 Þórunn hugm 24.m4a',
		'year' : 2020,
		'duration' : '1:54',
		'cover' : false
	},
	{
		'name' : 'Þórunn 25',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_12_21_56_43 Þórunn 25.m4a',
		'year' : 2020,
		'duration' : '2:25',
		'cover' : false
	},
	{
		'name' : 'Þórunn 26',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_12_22_17_36 Þórunn 26.m4a',
		'year' : 2020,
		'duration' : '1:52',
		'cover' : false
	},
	{
		'name' : 'you can save one but you cant save both',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_17_00_19_00 you can save one but you cant save both.m4a',
		'year' : 2020,
		'duration' : '1:55',
		'cover' : false
	},
	{
		'name' : 'ycsobycsb 2',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_17_00_24_44 ycsobycsb 2.m4a',
		'year' : 2020,
		'duration' : '0:25',
		'cover' : false
	},
	{
		'name' : 'oopsie (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_04_21_16_56_31 oopsie (cover).m4a',
		'year' : 2020,
		'duration' : '1:05',
		'cover' : true
	},
	{
		'name' : 'a cletchnemiac',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_03_23_44_42 a cletchnemiac.m4a',
		'year' : 2020,
		'duration' : '6:19',
		'cover' : false
	},
	{
		'name' : 'reed pete',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_03_23_53_32 reed pete.m4a',
		'year' : 2020,
		'duration' : '2:02',
		'cover' : false
	},
	{
		'name' : 'two paths same destination',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_11_20_26_58 two paths same destination.m4a',
		'year' : 2020,
		'duration' : '0:49',
		'cover' : false
	},
	{
		'name' : 'poem piece (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_22_17_29_52poem piece (cover).m4a',
		'year' : 2020,
		'duration' : '0:36',
		'cover' : true
	},
	{
		'name' : 'poem try 1 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_22_17_31_17 poem try 1 (cover).m4a',
		'year' : 2020,
		'duration' : '1:32',
		'cover' : true
	},
	{
		'name' : 'poem try 2 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_24_13_33_50 poem try 2 (cover).m4a',
		'year' : 2020,
		'duration' : '1:30',
		'cover' : true
	},
	{
		'name' : 'poem try 3 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_24_17_31_34 poem try 3 (cover).m4a',
		'year' : 2020,
		'duration' : '1:32',
		'cover' : true
	},
	{
		'name' : 'trítla út í búð',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_24_18_06_57 trítla út í búð.m4a',
		'year' : 2020,
		'duration' : '3:14',
		'cover' : false
	},
	{
		'name' : 'poem try 4 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_28_17_35_17 poem try 4 (cover).m4a',
		'year' : 2020,
		'duration' : '1:25',
		'cover' : true
	},
	{
		'name' : 'poem try 5 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_28_18_40_51 poem try 5 (cover).m4a',
		'year' : 2020,
		'duration' : '1:17',
		'cover' : true
	},
	{
		'name' : 'poem try 6 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_05_28_18_42_20 poem try 6 (cover).m4a',
		'year' : 2020,
		'duration' : '1:27',
		'cover' : true
	},
	{
		'name' : 'canon in d próf (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_06_05_16_45_37 canon in d próf (cover).m4a',
		'year' : 2020,
		'duration' : '1:52',
		'cover' : true
	},
	{
		'name' : 'gnossienne 4 próf (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_06_05_16_52_23 gnossienne 4 próf (cover).m4a',
		'year' : 2020,
		'duration' : '2:26',
		'cover' : true
	},
	{
		'name' : 'Þórunn Birta alternate try 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_06_15_15_40_41 Þórunn Birta alternate try 1.m4a',
		'year' : 2020,
		'duration' : '7:04',
		'cover' : false
	},
	{
		'name' : 'þbj try 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_06_17_00_41_54 þbj try 1.m4a',
		'year' : 2020,
		'duration' : '4:26',
		'cover' : false
	},
	{
		'name' : 'one trick pony',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_06_25_16_54_31 one trick pony.m4a',
		'year' : 2020,
		'duration' : '3:11',
		'cover' : false
	},
	{
		'name' : 'clair de practice (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_07_21_10_58 clair de practice (cover).m4a',
		'year' : 2020,
		'duration' : '10:33',
		'cover' : true
	},
	{
		'name' : 'er ekki komið nóg af þórunni',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_11_16_23_15 er ekki komið nóg af þórunni.m4a',
		'year' : 2020,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'þba endir',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_12_12_36_44 þba endir.m4a',
		'year' : 2020,
		'duration' : '1:19',
		'cover' : false
	},
	{
		'name' : 'err ekki komið nóg',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_12_15_37_07 err ekki komið nóg .m4a',
		'year' : 2020,
		'duration' : '1:19',
		'cover' : false
	},
	{
		'name' : 'cayce byrjun',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_12_15_59_28 cayce byrjun.m4a',
		'year' : 2020,
		'duration' : '1:22',
		'cover' : false
	},
	{
		'name' : 'Cayce endir',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_12_16_05_43 Cayce endir.m4a',
		'year' : 2020,
		'duration' : '1:24',
		'cover' : false
	},
	{
		'name' : 'þb flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_15_22_29 þb flygill 1.m4a',
		'year' : 2020,
		'duration' : '6:35',
		'cover' : false
	},
	{
		'name' : 'þbj flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_15_30_09 þbj flygill 1.m4a',
		'year' : 2020,
		'duration' : '4:10',
		'cover' : false
	},
	{
		'name' : 'katie flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_15_38_18 katie flygill 1.m4a',
		'year' : 2020,
		'duration' : '4:59',
		'cover' : false
	},
	{
		'name' : 'cayce flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_15_44_31 cayce flygill 1.m4a',
		'year' : 2020,
		'duration' : '2:52',
		'cover' : false
	},
	{
		'name' : 'anna flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_15_48_30 anna flygill 1.m4a',
		'year' : 2020,
		'duration' : '2:12',
		'cover' : false
	},
	{
		'name' : 'kathryn flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_15_53_14 kathryn flygill 1.m4a',
		'year' : 2020,
		'duration' : '7:32',
		'cover' : false
	},
	{
		'name' : 'Bryndís flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_16_02_18 Bryndís flygill 1.m4a',
		'year' : 2020,
		'duration' : '7:06',
		'cover' : false
	},
	{
		'name' : 'idunn flygill 1',
		'url' : 'Lelegar_upptokur/Nexus5X/19.7.2020/2020_07_14_16_10_54 idunn flygill 1.m4a',
		'year' : 2020,
		'duration' : '6:35',
		'cover' : false
	},
	{
		'name' : 'twilight in the mountains',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_01_19_00_54_46 twilight in the mountains.m4a',
		'year' : 2021,
		'duration' : '3:18',
		'cover' : false
	},
	{
		'name' : 'trust in the c',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_02_02_23_46_42 trust in the c.m4a',
		'year' : 2021,
		'duration' : '1:13',
		'cover' : false
	},
	{
		'name' : 'vals c kafli hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_02_18_13_20_07 vals c kafli hugmynd.m4a',
		'year' : 2021,
		'duration' : '0:32',
		'cover' : false
	},
	{
		'name' : 'blindur maður spilar á lífsins tóna',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_03_02_22_12_07 blindur maður spilar á lífsins tóna.m4a',
		'year' : 2021,
		'duration' : '7:29',
		'cover' : false
	},
	{
		'name' : 'maurice',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_03_08_20_38_58 maurice.m4a',
		'year' : 2021,
		'duration' : '5:13',
		'cover' : false
	},
	{
		'name' : 'mishanna',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_03_09_22_40_43 mishanna.m4a',
		'year' : 2021,
		'duration' : '13:48',
		'cover' : false
	},
	{
		'name' : 'góði góði hestur',
		'url' : 'Lelegar_upptokur/Nexus5X/22.3.2021/2021_03_13_20_49_18 góði góði hestur.m4a',
		'year' : 2021,
		'duration' : '7:23',
		'cover' : false
	},
	{
		'name' : 'piazbassi',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_16_21_05_11piazbassi.m4a',
		'year' : 2017,
		'duration' : '1:13',
		'cover' : false
	},
	{
		'name' : 'elskuamollklassik!!!',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_19_23_22_30elskuamollklassik!!!.m4a',
		'year' : 2017,
		'duration' : '3:41',
		'cover' : false
	},
	{
		'name' : 'wastheresomeonethere',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_19_23_33_45wastheresomeonethere.m4a',
		'year' : 2017,
		'duration' : '3:18',
		'cover' : false
	},
	{
		'name' : 'wagner',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_23_19_30_59wagner.m4a',
		'year' : 2017,
		'duration' : '0:47',
		'cover' : false
	},
	{
		'name' : 'socani',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_23_20_43_03socani.m4a',
		'year' : 2017,
		'duration' : '6:24',
		'cover' : false
	},
	{
		'name' : 'wagner2',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_26_22_37_50wagner2.m4a',
		'year' : 2017,
		'duration' : '1:11',
		'cover' : false
	},
	{
		'name' : 'beethovenloop',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_05_17_41_29beethovenloop.m4a',
		'year' : 2017,
		'duration' : '1:05',
		'cover' : false
	},
	{
		'name' : 'beethovenshield',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_06_14_28_28beethovenshield.m4a',
		'year' : 2017,
		'duration' : '0:28',
		'cover' : false
	},
	{
		'name' : 'Jesús Christ',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_07_00_45_42 Jesús Christ.m4a',
		'year' : 2017,
		'duration' : '1:51',
		'cover' : false
	},
	{
		'name' : 'beethov moon',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_18_19_59_42beethov moon.m4a',
		'year' : 2017,
		'duration' : '3:23',
		'cover' : false
	},
	{
		'name' : 'pompeiclassical',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_18_20_34_52pompeiclassical.m4a',
		'year' : 2017,
		'duration' : '0:50',
		'cover' : false
	},
	{
		'name' : 'socani classical interludes',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_21_22_01_15socani classical interludes.m4a',
		'year' : 2017,
		'duration' : '4:17',
		'cover' : false
	},
	{
		'name' : 'wagner',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_22_19_35_16wagner.m4a',
		'year' : 2017,
		'duration' : '8:03',
		'cover' : false
	},
	{
		'name' : 'ósk',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_23_15_12_56ósk.m4a',
		'year' : 2017,
		'duration' : '1:29',
		'cover' : false
	},
	{
		'name' : 'ósk hraðar',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_23_17_06_14ósk hraðar.m4a',
		'year' : 2017,
		'duration' : '1:57',
		'cover' : false
	},
	{
		'name' : 'óskata outro',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_23_17_39_04óskata outro.m4a',
		'year' : 2017,
		'duration' : '2:16',
		'cover' : false
	},
	{
		'name' : 'steady bass beat',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_25_16_15_25steady bass beat.m4a',
		'year' : 2017,
		'duration' : '3:08',
		'cover' : false
	},
	{
		'name' : 'evergoingup',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_25_16_47_32evergoingup.m4a',
		'year' : 2017,
		'duration' : '4:14',
		'cover' : false
	},
	{
		'name' : 'gamalt en rythmott',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_27_12_00_42 gamalt en rythmott.m4a',
		'year' : 2017,
		'duration' : '5:59',
		'cover' : false
	},
	{
		'name' : 'simple loop',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_27_12_48_37 simple loop.m4a',
		'year' : 2017,
		'duration' : '1:11',
		'cover' : false
	},
	{
		'name' : 'hryllingur',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_28_17_39_03hryllingur.m4a',
		'year' : 2017,
		'duration' : '3:40',
		'cover' : false
	},
	{
		'name' : 'einmitt',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_05_17_02_50 einmitt.m4a',
		'year' : 2018,
		'duration' : '0:36',
		'cover' : false
	},
	{
		'name' : 'pompeihug',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_07_22_57_51pompeihug.m4a',
		'year' : 2018,
		'duration' : '1:42',
		'cover' : false
	},
	{
		'name' : 'lalala',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_15_18_55_26lalala.m4a',
		'year' : 2018,
		'duration' : '0:31',
		'cover' : false
	},
	{
		'name' : 'needswork',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_18_14_58_08needswork.m4a',
		'year' : 2018,
		'duration' : '4:44',
		'cover' : false
	},
	{
		'name' : 'ekki gler',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_22_16_10_28 ekki gler.m4a',
		'year' : 2018,
		'duration' : '3:06',
		'cover' : false
	},
	{
		'name' : 'comfort in no',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_29_16_24_23 comfort in no.m4a',
		'year' : 2018,
		'duration' : '0:32',
		'cover' : false
	},
	{
		'name' : 'piazzöngut (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_29_19_00_40piazzöngut (cover).m4a',
		'year' : 2018,
		'duration' : '0:34',
		'cover' : true
	},
	{
		'name' : 'a9th fleiri hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_19_48_51a9th fleiri hugmyndir.m4a',
		'year' : 2018,
		'duration' : '7:03',
		'cover' : false
	},
	{
		'name' : 'a9th solo hugmyndir ish',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_19_57_30a9th solo hugmyndir ish.m4a',
		'year' : 2018,
		'duration' : '2:17',
		'cover' : false
	},
	{
		'name' : 'ddúr hugmond',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_20_45_42ddúr hugmond.m4a',
		'year' : 2018,
		'duration' : '0:55',
		'cover' : false
	},
	{
		'name' : 'very very chick',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_23_02_22 very very chick.m4a',
		'year' : 2018,
		'duration' : '4:29',
		'cover' : false
	},
	{
		'name' : 'fefefe',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_10_22_52_26fefefe.m4a',
		'year' : 2018,
		'duration' : '2:33',
		'cover' : false
	},
	{
		'name' : 'kölski kemur klakkur',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_03_17_18_38_03 kölski kemur klakkur.m4a',
		'year' : 2018,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'frog intro',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_04_01_21_01_12frog intro.m4a',
		'year' : 2018,
		'duration' : '2:17',
		'cover' : false
	},
	{
		'name' : 'nothing is original only feeling',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_04_12_12_30_46 nothing is original only feeling.m4a',
		'year' : 2018,
		'duration' : '1:18',
		'cover' : false
	},
	{
		'name' : 'world war II',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_04_18_11_34_40 world war II.m4a',
		'year' : 2018,
		'duration' : '1:37',
		'cover' : false
	},
	{
		'name' : 'eine kleine beethoven',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_05_12_24_36eine kleine beethoven.m4a',
		'year' : 2018,
		'duration' : '1:24',
		'cover' : false
	},
	{
		'name' : 'basshoven',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_05_21_57_57basshoven.m4a',
		'year' : 2018,
		'duration' : '0:23',
		'cover' : false
	},
	{
		'name' : 'during hours',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_10_16_52_49 during hours.m4a',
		'year' : 2018,
		'duration' : '2:41',
		'cover' : false
	},
	{
		'name' : 'popplag í g moll',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_10_17_17_14popplag í g moll.m4a',
		'year' : 2018,
		'duration' : '2:43',
		'cover' : false
	},
	{
		'name' : 'Beethoven var bara maður eins og við',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_11_09_01_17 Beethoven var bara maður eins og við.m4a',
		'year' : 2018,
		'duration' : '0:19',
		'cover' : false
	},
	{
		'name' : 'bambam',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_11_09_35_40bambam.m4a',
		'year' : 2018,
		'duration' : '2:24',
		'cover' : false
	},
	{
		'name' : 'hakuna matata',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_15_13_01_12hakuna matata.m4a',
		'year' : 2018,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'gler lol',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_16_21_54_28gler lol.m4a',
		'year' : 2018,
		'duration' : '3:14',
		'cover' : false
	},
	{
		'name' : 'þreyttur í vinstri',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_23_19_49_38 þreyttur í vinstri.m4a',
		'year' : 2018,
		'duration' : '1:50',
		'cover' : false
	},
	{
		'name' : 'Bach hægri handar æfing a moll',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_24_16_23_09 Bach hægri handar æfing a moll.m4a',
		'year' : 2018,
		'duration' : '4:38',
		'cover' : false
	},
	{
		'name' : 'dududu',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_07_31_04_02_34dududu.m4a',
		'year' : 2018,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'wherewasi',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_10_28_01_20_11wherewasi.m4a',
		'year' : 2018,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'jesus was a carpenter',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_10_29_13_23_08jesus was a carpenter.m4a',
		'year' : 2018,
		'duration' : '3:35',
		'cover' : false
	},
	{
		'name' : 'tirilipu (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_11_21_02_40_45tirilipu (cover).m4a',
		'year' : 2018,
		'duration' : '0:18',
		'cover' : true
	},
	{
		'name' : 'eitthvað d drungalegt repeat og cheerios endir',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_12_11_00_25_06 eitthvað d drungalegt repeat og cheerios endir.m4a',
		'year' : 2018,
		'duration' : '13:52',
		'cover' : false
	},
	{
		'name' : 'klukkur syngja (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_12_12_17_46_13klukkur syngja (cover).m4a',
		'year' : 2018,
		'duration' : '1:13',
		'cover' : true
	},
	{
		'name' : 'brunomars',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_07_16_52_21brunomars.m4a',
		'year' : 2019,
		'duration' : '1:40',
		'cover' : false
	},
	{
		'name' : 'into the fucking trees;',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_13_19_15_02 into the fucking trees;.m4a',
		'year' : 2019,
		'duration' : '5:03',
		'cover' : false
	},
	{
		'name' : 'hills shitty demo',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_15_09_49_34hills shitty demo.m4a',
		'year' : 2019,
		'duration' : '2:34',
		'cover' : false
	},
	{
		'name' : 'meira shitty hills',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_16_15_01_44meira shitty hills.m4a',
		'year' : 2019,
		'duration' : '3:10',
		'cover' : false
	},
	{
		'name' : 'where was I ba og bass',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_19_00_40_25 where was I ba og bass.m4a',
		'year' : 2019,
		'duration' : '1:52',
		'cover' : false
	},
	{
		'name' : 'lullandi froskur',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_24_12_50_40lullandi froskur.m4a',
		'year' : 2019,
		'duration' : '1:16',
		'cover' : false
	},
	{
		'name' : 'shaitty undertale',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_27_16_22_56shaitty undertale.m4a',
		'year' : 2019,
		'duration' : '1:38',
		'cover' : false
	},
	{
		'name' : 'minna shitty undertale',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_27_16_25_02 minna shitty undertale.m4a',
		'year' : 2019,
		'duration' : '7:23',
		'cover' : false
	},
	{
		'name' : 'birdo',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_30_14_35_18birdo.m4a',
		'year' : 2019,
		'duration' : '2:44',
		'cover' : false
	},
	{
		'name' : 'trial over',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_30_14_46_09trial over.m4a',
		'year' : 2019,
		'duration' : '0:41',
		'cover' : false
	},
	{
		'name' : 'head up against keyboard',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_30_15_06_02 head up against keyboard.m4a',
		'year' : 2019,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'inb4 great sea',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_31_14_03_32inb4 great sea.m4a',
		'year' : 2019,
		'duration' : '1:12',
		'cover' : false
	},
	{
		'name' : 'the navy blue',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_02_21_26_36 the navy blue.m4a',
		'year' : 2019,
		'duration' : '1:02',
		'cover' : false
	},
	{
		'name' : 'lengra jafnvel',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_04_15_02_48 lengra jafnvel.m4a',
		'year' : 2019,
		'duration' : '2:51',
		'cover' : false
	},
	{
		'name' : 'þetta er nú reyndar næstum bókstaflega gler eða hvað',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_04_15_44_08 þetta er nú reyndar næstum bókstaflega gler eða hvað.m4a',
		'year' : 2019,
		'duration' : '0:56',
		'cover' : false
	},
	{
		'name' : 'big snory man',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_04_16_08_28 big snory man.m4a',
		'year' : 2019,
		'duration' : '4:03',
		'cover' : false
	},
	{
		'name' : 'karfa í holu',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_08_12_16_15karfa í holu.m4a',
		'year' : 2019,
		'duration' : '1:06',
		'cover' : false
	},
	{
		'name' : 'bang shot me down',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_10_13_42_11bang shot me down.m4a',
		'year' : 2019,
		'duration' : '1:34',
		'cover' : false
	},
	{
		'name' : 'what was I outro',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_15_12_23_34 what was I outro.m4a',
		'year' : 2019,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'ég fór beint heim til þín',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_19_13_52_13 ég fór beint heim til þín.m4a',
		'year' : 2019,
		'duration' : '2:35',
		'cover' : false
	},
	{
		'name' : 'mozart',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_24_20_14_04mozart.m4a',
		'year' : 2019,
		'duration' : '0:39',
		'cover' : false
	},
	{
		'name' : 'korpúlfsstaðir',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_25_22_37_00korpúlfsstaðir.m4a',
		'year' : 2019,
		'duration' : '3:31',
		'cover' : false
	},
	{
		'name' : 'damdamdamdamdamdamdam',
		'url' : 'Lelegar_upptokur/Nexus5X/26.okt.2017/damdamdamdamdamdamdam.m4a',
		'year' : 2017,
		'duration' : '0:42',
		'cover' : false
	},
	{
		'name' : 'the Apple store',
		'url' : 'Lelegar_upptokur/Nexus5X/26.okt.2017/the Apple store.m4a',
		'year' : 2017,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : '74',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/74.m4a',
		'year' : 2022,
		'duration' : '0:29',
		'cover' : false
	},
	{
		'name' : 'Bach (cover) og Elínbjört',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Bach (cover) og Elínbjört.m4a',
		'year' : 2022,
		'duration' : '5:57',
		'cover' : true
	},
	{
		'name' : 'Detective Sherry Bottom',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Detective Sherry Bottom.m4a',
		'year' : 2023,
		'duration' : '6:04',
		'cover' : false
	},
	{
		'name' : 'Double piano whammy away',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Double piano whammy away.m4a',
		'year' : 2023,
		'duration' : '3:04',
		'cover' : false
	},
	{
		'name' : 'Elena arpeggíukafli',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Elena arpeggíukafli.m4a',
		'year' : 2022,
		'duration' : '3:56',
		'cover' : false
	},
	{
		'name' : 'Elena byrjun kannski',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Elena byrjun kannski.m4a',
		'year' : 2022,
		'duration' : '1:43',
		'cover' : false
	},
	{
		'name' : 'Elena first draft',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Elena first draft.m4a',
		'year' : 2022,
		'duration' : '4:57',
		'cover' : false
	},
	{
		'name' : 'Elena rólegur kafli fyrsti kafli',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Elena rólegur kafli fyrsti kafli.m4a',
		'year' : 2022,
		'duration' : '1:32',
		'cover' : false
	},
	{
		'name' : 'Elínbjört jarðarför rennsli',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Elínbjört jarðarför rennsli.m4a',
		'year' : 2022,
		'duration' : '1:26',
		'cover' : false
	},
	{
		'name' : 'Flat Tires',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Flat Tires.m4a',
		'year' : 2022,
		'duration' : '2:53',
		'cover' : false
	},
	{
		'name' : 'Gigue - Bach (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Gigue - Bach (cover).m4a',
		'year' : 2022,
		'duration' : '4:11',
		'cover' : true
	},
	{
		'name' : 'Gigue no. 2 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Gigue no. 2 (cover).m4a',
		'year' : 2022,
		'duration' : '3:19',
		'cover' : true
	},
	{
		'name' : 'Gigue no.3 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Gigue no.3 (cover).m4a',
		'year' : 2022,
		'duration' : '3:38',
		'cover' : true
	},
	{
		'name' : 'Glass Castle',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Glass Castle.m4a',
		'year' : 2023,
		'duration' : '2:25',
		'cover' : false
	},
	{
		'name' : 'Glockenspiel',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Glockenspiel.m4a',
		'year' : 2023,
		'duration' : '0:30',
		'cover' : false
	},
	{
		'name' : 'Godzilla',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Godzilla.m4a',
		'year' : 2022,
		'duration' : '3:08',
		'cover' : false
	},
	{
		'name' : 'Grétars Extravaganza',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Grétars Extravaganza.m4a',
		'year' : 2021,
		'duration' : '0:11',
		'cover' : false
	},
	{
		'name' : 'Gummybear',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Gummybear.m4a',
		'year' : 2022,
		'duration' : '4:10',
		'cover' : false
	},
	{
		'name' : 'Hakka hakka',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hakka hakka.m4a',
		'year' : 2022,
		'duration' : '4:31',
		'cover' : false
	},
	{
		'name' : 'Hef gert áður',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hef gert áður.m4a',
		'year' : 2021,
		'duration' : '1:02',
		'cover' : false
	},
	{
		'name' : 'Hmmmmm',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hmmmmm.m4a',
		'year' : 2022,
		'duration' : '1:39',
		'cover' : false
	},
	{
		'name' : 'Hot steaming',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hot steaming.m4a',
		'year' : 2022,
		'duration' : '5:14',
		'cover' : false
	},
	{
		'name' : 'Hulda 2',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hulda 2.m4a',
		'year' : 2023,
		'duration' : '2:47',
		'cover' : false
	},
	{
		'name' : 'Hulda 3',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hulda 3.m4a',
		'year' : 2023,
		'duration' : '12:50',
		'cover' : false
	},
	{
		'name' : 'Hulda karaoke',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hulda karaoke.m4a',
		'year' : 2023,
		'duration' : '1:51',
		'cover' : false
	},
	{
		'name' : 'Hulda söngur',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hulda söngur.m4a',
		'year' : 2023,
		'duration' : '0:59',
		'cover' : false
	},
	{
		'name' : 'Hulda',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Hulda.m4a',
		'year' : 2023,
		'duration' : '9:20',
		'cover' : false
	},
	{
		'name' : 'In the upper atmosphere',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/In the upper atmosphere.m4a',
		'year' : 2022,
		'duration' : '4:24',
		'cover' : false
	},
	{
		'name' : 'Kemur úr vestri',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Kemur úr vestri.m4a',
		'year' : 2022,
		'duration' : '5:05',
		'cover' : false
	},
	{
		'name' : 'Leiðir á away',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Leiðir á away.m4a',
		'year' : 2022,
		'duration' : '0:51',
		'cover' : false
	},
	{
		'name' : 'Low battery',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Low battery.m4a',
		'year' : 2022,
		'duration' : '7:37',
		'cover' : false
	},
	{
		'name' : 'Mistakes are a part of life',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Mistakes are a part of life.m4a',
		'year' : 2022,
		'duration' : '0:17',
		'cover' : false
	},
	{
		'name' : 'Mögulega var þetta aðeins betra',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Mögulega var þetta aðeins betra.m4a',
		'year' : 2022,
		'duration' : '3:43',
		'cover' : false
	},
	{
		'name' : 'Neon Clouds (b34)',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Neon Clouds (b34).m4a',
		'year' : 2023,
		'duration' : '1:56',
		'cover' : false
	},
	{
		'name' : 'Ný íbúð part 2 (Hornstrandir)',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Ný íbúð part 2 (Hornstrandir).m4a',
		'year' : 2022,
		'duration' : '2:44',
		'cover' : false
	},
	{
		'name' : 'Ný íbúð',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Ný íbúð.m4a',
		'year' : 2021,
		'duration' : '2:43',
		'cover' : false
	},
	{
		'name' : 'Nýja Testamentið',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Nýja Testamentið.m4a',
		'year' : 2021,
		'duration' : '1:43',
		'cover' : false
	},
	{
		'name' : 'Rennsli fyrir útgáfutónleika H9KM3',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Rennsli fyrir útgáfutónleika H9KM3.m4a',
		'year' : 2022,
		'duration' : '47:47',
		'cover' : false
	},
	{
		'name' : 'Sigur Óp',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Sigur Óp.m4a',
		'year' : 2022,
		'duration' : '5:34',
		'cover' : false
	},
	{
		'name' : 'Sorg í hausnum en fer ekki yfir í puttana',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Sorg í hausnum en fer ekki yfir í puttana.m4a',
		'year' : 2022,
		'duration' : '10:12',
		'cover' : false
	},
	{
		'name' : 'Spooked intro hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Spooked intro hugmynd.m4a',
		'year' : 2023,
		'duration' : '0:46',
		'cover' : false
	},
	{
		'name' : 'Turtledove',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Turtledove.m4a',
		'year' : 2022,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : 'Álfkonan',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Álfkonan.m4a',
		'year' : 2022,
		'duration' : '6:23',
		'cover' : false
	},
	{
		'name' : 'Þarf að fara',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Þarf að fara.m4a',
		'year' : 2022,
		'duration' : '1:05',
		'cover' : false
	},
	{
		'name' : 'Það er gott að fá sér göngutúr',
		'url' : 'Lelegar_upptokur/Nexus5X/29.4.2023/Það er gott að fá sér göngutúr.m4a',
		'year' : 2023,
		'duration' : '0:21',
		'cover' : false
	},
	{
		'name' : 'fells good',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_04_01_00_20 fells good.m4a',
		'year' : 2017,
		'duration' : '4:07',
		'cover' : false
	},
	{
		'name' : 'the hills of madness',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_05_15_12_40 the hills of madness.m4a',
		'year' : 2017,
		'duration' : '4:37',
		'cover' : false
	},
	{
		'name' : 'brotafgömlu',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_13_15_15_50brotafgömlu.m4a',
		'year' : 2017,
		'duration' : '1:04',
		'cover' : false
	},
	{
		'name' : 'piazbassi',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_16_21_05_11piazbassi.m4a',
		'year' : 2017,
		'duration' : '1:13',
		'cover' : false
	},
	{
		'name' : 'elskuamollklassik!!!',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_19_23_22_30elskuamollklassik!!!.m4a',
		'year' : 2017,
		'duration' : '3:41',
		'cover' : false
	},
	{
		'name' : 'wastheresomeonethere',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_19_23_33_45wastheresomeonethere.m4a',
		'year' : 2017,
		'duration' : '3:18',
		'cover' : false
	},
	{
		'name' : 'wagner',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_23_19_30_59wagner.m4a',
		'year' : 2017,
		'duration' : '0:47',
		'cover' : false
	},
	{
		'name' : 'socani',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_23_20_43_03socani.m4a',
		'year' : 2017,
		'duration' : '6:24',
		'cover' : false
	},
	{
		'name' : 'wagner2',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_11_26_22_37_50wagner2.m4a',
		'year' : 2017,
		'duration' : '1:11',
		'cover' : false
	},
	{
		'name' : 'internetalina',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_02_15_53_49internetalina.m4a',
		'year' : 2017,
		'duration' : '8:32',
		'cover' : false
	},
	{
		'name' : 'internethenrik',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_02_16_32_38internethenrik.m4a',
		'year' : 2017,
		'duration' : '4:27',
		'cover' : false
	},
	{
		'name' : 'beethovenloop',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_05_17_41_29beethovenloop.m4a',
		'year' : 2017,
		'duration' : '1:05',
		'cover' : false
	},
	{
		'name' : 'beethovenshield',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_06_14_28_28beethovenshield.m4a',
		'year' : 2017,
		'duration' : '0:28',
		'cover' : false
	},
	{
		'name' : 'Jesús Christ',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_07_00_45_42 Jesús Christ.m4a',
		'year' : 2017,
		'duration' : '1:51',
		'cover' : false
	},
	{
		'name' : 'beethov moon',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_18_19_59_42beethov moon.m4a',
		'year' : 2017,
		'duration' : '3:23',
		'cover' : false
	},
	{
		'name' : 'pompeiclassical',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_18_20_34_52pompeiclassical.m4a',
		'year' : 2017,
		'duration' : '0:50',
		'cover' : false
	},
	{
		'name' : 'socani classical interludes',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_21_22_01_15socani classical interludes.m4a',
		'year' : 2017,
		'duration' : '4:17',
		'cover' : false
	},
	{
		'name' : 'wagner',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_22_19_35_16wagner.m4a',
		'year' : 2017,
		'duration' : '8:03',
		'cover' : false
	},
	{
		'name' : 'ósk',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_23_15_12_56ósk.m4a',
		'year' : 2017,
		'duration' : '1:29',
		'cover' : false
	},
	{
		'name' : 'ósk hraðar',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_23_17_06_14ósk hraðar.m4a',
		'year' : 2017,
		'duration' : '1:57',
		'cover' : false
	},
	{
		'name' : 'óskata outro',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_23_17_39_04óskata outro.m4a',
		'year' : 2017,
		'duration' : '2:16',
		'cover' : false
	},
	{
		'name' : 'steady bass beat',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_25_16_15_25steady bass beat.m4a',
		'year' : 2017,
		'duration' : '3:08',
		'cover' : false
	},
	{
		'name' : 'evergoingup',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_25_16_47_32evergoingup.m4a',
		'year' : 2017,
		'duration' : '4:14',
		'cover' : false
	},
	{
		'name' : 'gamalt en rythmott',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_27_12_00_42 gamalt en rythmott.m4a',
		'year' : 2017,
		'duration' : '5:59',
		'cover' : false
	},
	{
		'name' : 'simple loop',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_27_12_48_37 simple loop.m4a',
		'year' : 2017,
		'duration' : '1:11',
		'cover' : false
	},
	{
		'name' : 'hryllingur',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2017_12_28_17_39_03hryllingur.m4a',
		'year' : 2017,
		'duration' : '3:40',
		'cover' : false
	},
	{
		'name' : 'glassetude (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_03_13_58_18glassetude (cover).m4a',
		'year' : 2018,
		'duration' : '5:28',
		'cover' : true
	},
	{
		'name' : 'einmitt',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_05_17_02_50 einmitt.m4a',
		'year' : 2018,
		'duration' : '0:36',
		'cover' : false
	},
	{
		'name' : 'thirdmvmt (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_05_18_02_17thirdmvmt (cover).m4a',
		'year' : 2018,
		'duration' : '11:03',
		'cover' : true
	},
	{
		'name' : 'pompeihug',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_07_22_57_51pompeihug.m4a',
		'year' : 2018,
		'duration' : '1:42',
		'cover' : false
	},
	{
		'name' : 'lalala',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_15_18_55_26lalala.m4a',
		'year' : 2018,
		'duration' : '0:31',
		'cover' : false
	},
	{
		'name' : 'needswork',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_18_14_58_08needswork.m4a',
		'year' : 2018,
		'duration' : '4:44',
		'cover' : false
	},
	{
		'name' : 'ekki gler',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_22_16_10_28 ekki gler.m4a',
		'year' : 2018,
		'duration' : '3:06',
		'cover' : false
	},
	{
		'name' : 'comfort in no',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_29_16_24_23 comfort in no.m4a',
		'year' : 2018,
		'duration' : '0:32',
		'cover' : false
	},
	{
		'name' : 'piazzöngut',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_01_29_19_00_40piazzöngut.m4a',
		'year' : 2018,
		'duration' : '0:34',
		'cover' : false
	},
	{
		'name' : 'a9th fleiri hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_02_08_19_48_51a9th fleiri hugmyndir.m4a',
		'year' : 2018,
		'duration' : '7:03',
		'cover' : false
	},
	{
		'name' : 'a9th solo hugmyndir ish',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_02_08_19_57_30a9th solo hugmyndir ish.m4a',
		'year' : 2018,
		'duration' : '2:17',
		'cover' : false
	},
	{
		'name' : 'ddúr hugmond',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_02_08_20_45_42ddúr hugmond.m4a',
		'year' : 2018,
		'duration' : '0:55',
		'cover' : false
	},
	{
		'name' : 'very very chick',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_02_08_23_02_22 very very chick.m4a',
		'year' : 2018,
		'duration' : '4:29',
		'cover' : false
	},
	{
		'name' : 'fefefe',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_02_10_22_52_26fefefe.m4a',
		'year' : 2018,
		'duration' : '2:33',
		'cover' : false
	},
	{
		'name' : 'kölski kemur klakkur',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_03_17_18_38_03 kölski kemur klakkur.m4a',
		'year' : 2018,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'frog intro',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_04_01_21_01_12frog intro.m4a',
		'year' : 2018,
		'duration' : '2:17',
		'cover' : false
	},
	{
		'name' : 'veranálægtogundirbuabeethoven',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_04_11_12_40_17veranálægtogundirbuabeethoven.m4a',
		'year' : 2018,
		'duration' : '0:50',
		'cover' : false
	},
	{
		'name' : 'nothing is original only feeling',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_04_12_12_30_46 nothing is original only feeling.m4a',
		'year' : 2018,
		'duration' : '1:18',
		'cover' : false
	},
	{
		'name' : 'world war II',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_04_18_11_34_40 world war II.m4a',
		'year' : 2018,
		'duration' : '1:37',
		'cover' : false
	},
	{
		'name' : 'eine kleine beethoven',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_05_12_24_36eine kleine beethoven.m4a',
		'year' : 2018,
		'duration' : '1:24',
		'cover' : false
	},
	{
		'name' : 'basshoven',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_05_21_57_57basshoven.m4a',
		'year' : 2018,
		'duration' : '0:23',
		'cover' : false
	},
	{
		'name' : 'during hours',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_10_16_52_49 during hours.m4a',
		'year' : 2018,
		'duration' : '2:41',
		'cover' : false
	},
	{
		'name' : 'popplag í g moll',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_10_17_17_14popplag í g moll.m4a',
		'year' : 2018,
		'duration' : '2:43',
		'cover' : false
	},
	{
		'name' : 'Beethoven var bara maður eins og við',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_11_09_01_17 Beethoven var bara maður eins og við.m4a',
		'year' : 2018,
		'duration' : '0:19',
		'cover' : false
	},
	{
		'name' : 'bambam',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_11_09_35_40bambam.m4a',
		'year' : 2018,
		'duration' : '2:24',
		'cover' : false
	},
	{
		'name' : 'hakuna matata',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_15_13_01_12hakuna matata.m4a',
		'year' : 2018,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'gler lol',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_16_21_54_28gler lol.m4a',
		'year' : 2018,
		'duration' : '3:14',
		'cover' : false
	},
	{
		'name' : 'þreyttur í vinstri',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_23_19_49_38 þreyttur í vinstri.m4a',
		'year' : 2018,
		'duration' : '1:50',
		'cover' : false
	},
	{
		'name' : 'Bach hægri handar æfing a moll',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_05_24_16_23_09 Bach hægri handar æfing a moll.m4a',
		'year' : 2018,
		'duration' : '4:38',
		'cover' : false
	},
	{
		'name' : 'dududu',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_07_31_04_02_34dududu.m4a',
		'year' : 2018,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'wherewasi',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_10_28_01_20_11wherewasi.m4a',
		'year' : 2018,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'jesus was a carpenter',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_10_29_13_23_08jesus was a carpenter.m4a',
		'year' : 2018,
		'duration' : '3:35',
		'cover' : false
	},
	{
		'name' : 'tirilipu',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_11_21_02_40_45tirilipu.m4a',
		'year' : 2018,
		'duration' : '0:18',
		'cover' : false
	},
	{
		'name' : 'eitthvað d drungalegt repeat og cheerios endir',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_12_11_00_25_06 eitthvað d drungalegt repeat og cheerios endir.m4a',
		'year' : 2018,
		'duration' : '13:52',
		'cover' : false
	},
	{
		'name' : 'klukkur syngja',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_12_12_17_46_13klukkur syngja.m4a',
		'year' : 2018,
		'duration' : '1:13',
		'cover' : false
	},
	{
		'name' : 'straum sal',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_12_12_17_53_50straum sal.m4a',
		'year' : 2018,
		'duration' : '2:51',
		'cover' : false
	},
	{
		'name' : 'her i minu minni',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2018_12_12_18_15_16her i minu minni.m4a',
		'year' : 2018,
		'duration' : '3:31',
		'cover' : false
	},
	{
		'name' : 'brunomars',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_07_16_52_21brunomars.m4a',
		'year' : 2019,
		'duration' : '1:40',
		'cover' : false
	},
	{
		'name' : 'into the fucking trees;',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_13_19_15_02 into the fucking trees;.m4a',
		'year' : 2019,
		'duration' : '5:03',
		'cover' : false
	},
	{
		'name' : 'hills shitty demo',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_15_09_49_34hills shitty demo.m4a',
		'year' : 2019,
		'duration' : '2:34',
		'cover' : false
	},
	{
		'name' : 'meira shitty hills',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_16_15_01_44meira shitty hills.m4a',
		'year' : 2019,
		'duration' : '3:10',
		'cover' : false
	},
	{
		'name' : 'where was I ba og bass',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_19_00_40_25 where was I ba og bass.m4a',
		'year' : 2019,
		'duration' : '1:52',
		'cover' : false
	},
	{
		'name' : 'lullandi froskur',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_24_12_50_40lullandi froskur.m4a',
		'year' : 2019,
		'duration' : '1:16',
		'cover' : false
	},
	{
		'name' : 'shaitty undertale',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_27_16_22_56shaitty undertale.m4a',
		'year' : 2019,
		'duration' : '1:38',
		'cover' : false
	},
	{
		'name' : 'minna shitty undertale',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_27_16_25_02 minna shitty undertale.m4a',
		'year' : 2019,
		'duration' : '7:23',
		'cover' : false
	},
	{
		'name' : 'elvar mudd',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_29_12_14_07elvar mudd.m4a',
		'year' : 2019,
		'duration' : '0:21',
		'cover' : false
	},
	{
		'name' : 'birdo',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_30_14_35_18birdo.m4a',
		'year' : 2019,
		'duration' : '2:44',
		'cover' : false
	},
	{
		'name' : 'trial over',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_30_14_46_09trial over.m4a',
		'year' : 2019,
		'duration' : '0:41',
		'cover' : false
	},
	{
		'name' : 'head up against keyboard',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_30_15_06_02 head up against keyboard.m4a',
		'year' : 2019,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'inb4 great sea',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_01_31_14_03_32inb4 great sea.m4a',
		'year' : 2019,
		'duration' : '1:12',
		'cover' : false
	},
	{
		'name' : 'the navy blue',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_02_21_26_36 the navy blue.m4a',
		'year' : 2019,
		'duration' : '1:02',
		'cover' : false
	},
	{
		'name' : 'lengra jafnvel',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_04_15_02_48 lengra jafnvel.m4a',
		'year' : 2019,
		'duration' : '2:51',
		'cover' : false
	},
	{
		'name' : 'þetta er nú reyndar næstum bókstaflega gler eða hvað',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_04_15_44_08 þetta er nú reyndar næstum bókstaflega gler eða hvað.m4a',
		'year' : 2019,
		'duration' : '0:56',
		'cover' : false
	},
	{
		'name' : 'big snory man',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_04_16_08_28 big snory man.m4a',
		'year' : 2019,
		'duration' : '4:03',
		'cover' : false
	},
	{
		'name' : 'karfa í holu',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_08_12_16_15karfa í holu.m4a',
		'year' : 2019,
		'duration' : '1:06',
		'cover' : false
	},
	{
		'name' : 'bang shot me down',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_10_13_42_11bang shot me down.m4a',
		'year' : 2019,
		'duration' : '1:34',
		'cover' : false
	},
	{
		'name' : 'what was I outro',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_15_12_23_34 what was I outro.m4a',
		'year' : 2019,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'ég fór beint heim til þín',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_19_13_52_13 ég fór beint heim til þín.m4a',
		'year' : 2019,
		'duration' : '2:35',
		'cover' : false
	},
	{
		'name' : 'mozart',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_24_20_14_04mozart.m4a',
		'year' : 2019,
		'duration' : '0:39',
		'cover' : false
	},
	{
		'name' : 'korpúlfsstaðir',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_02_25_22_37_00korpúlfsstaðir.m4a',
		'year' : 2019,
		'duration' : '3:31',
		'cover' : false
	},
	{
		'name' : 'hindelburg',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_04_14_21_37_57hindelburg.m4a',
		'year' : 2019,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'alt er eins og upphaf',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_04_14_22_00_47 alt er eins og upphaf.m4a',
		'year' : 2019,
		'duration' : '7:41',
		'cover' : false
	},
	{
		'name' : 'uhm tjah',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_04_14_22_14_18uhm tjah.m4a',
		'year' : 2019,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'eitthvað svona angelic sjitt',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_04_14_22_33_57 eitthvað svona angelic sjitt.m4a',
		'year' : 2019,
		'duration' : '1:03',
		'cover' : false
	},
	{
		'name' : 'heyrhimna (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_04_28_23_22_06heyrhimna (cover).m4a',
		'year' : 2019,
		'duration' : '1:48',
		'cover' : true
	},
	{
		'name' : 'sjávarsíðan',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_04_30_20_08_46sjávarsíðan.m4a',
		'year' : 2019,
		'duration' : '2:06',
		'cover' : false
	},
	{
		'name' : 'capillus confundus',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_04_22_15_54capillus confundus.m4a',
		'year' : 2019,
		'duration' : '8:34',
		'cover' : false
	},
	{
		'name' : 'ohug4',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_15_20_30_35ohug4.m4a',
		'year' : 2019,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'totality of being',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_16_21_31_56totality of being.m4a',
		'year' : 2019,
		'duration' : '0:26',
		'cover' : false
	},
	{
		'name' : 'upphaf',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_20_21_49_35upphaf.m4a',
		'year' : 2019,
		'duration' : '3:11',
		'cover' : false
	},
	{
		'name' : 'sibeliusisalive',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_21_16_39_26sibeliusisalive.m4a',
		'year' : 2019,
		'duration' : '2:37',
		'cover' : false
	},
	{
		'name' : 'drungalegt cheerios með snarli',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_22_22_46_36 drungalegt cheerios með snarli.m4a',
		'year' : 2019,
		'duration' : '2:00',
		'cover' : false
	},
	{
		'name' : 'jakkafár',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_24_22_47_23jakkafár.m4a',
		'year' : 2019,
		'duration' : '0:54',
		'cover' : false
	},
	{
		'name' : 'jesuswasacarp333',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_05_24_22_58_54jesuswasacarp333.m4a',
		'year' : 2019,
		'duration' : '5:36',
		'cover' : false
	},
	{
		'name' : 'öfugsnúið',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_06_03_20_05_14öfugsnúið.m4a',
		'year' : 2019,
		'duration' : '5:03',
		'cover' : false
	},
	{
		'name' : 'uuuneiii',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_06_25_14_58_20uuuneiii.m4a',
		'year' : 2019,
		'duration' : '2:05',
		'cover' : false
	},
	{
		'name' : 'barababara',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_06_30_09_37_32barababara.m4a',
		'year' : 2019,
		'duration' : '1:29',
		'cover' : false
	},
	{
		'name' : 'applestorerecording',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_07_02applestorerecording.m4a',
		'year' : 2019,
		'duration' : '3:15',
		'cover' : false
	},
	{
		'name' : 'apple2',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_07_04_19_48_23apple2.m4a',
		'year' : 2019,
		'duration' : '3:10',
		'cover' : false
	},
	{
		'name' : 'chocolate factory of dreams',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_07_04_20_02_27 chocolate factory of dreams.m4a',
		'year' : 2019,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : 'apple3',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_07_04_apple3.m4a',
		'year' : 2019,
		'duration' : '3:08',
		'cover' : false
	},
	{
		'name' : 'garage',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_08_01_12_57_19garage.m4a',
		'year' : 2019,
		'duration' : '2:01',
		'cover' : false
	},
	{
		'name' : 'fantasy',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_08_03_23_22_25 fantasy.m4a',
		'year' : 2019,
		'duration' : '6:20',
		'cover' : false
	},
	{
		'name' : 'húsfundur í 56-63',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_08_19_22_12_21húsfundur í 56-63.m4a',
		'year' : 2019,
		'duration' : '10:03',
		'cover' : false
	},
	{
		'name' : 'bryndís hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_09_25_20_54_45bryndís hugmyndir.m4a',
		'year' : 2019,
		'duration' : '1:18',
		'cover' : false
	},
	{
		'name' : 'bryndís level 2',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_09_25_21_53_50bryndís level 2.m4a',
		'year' : 2019,
		'duration' : '1:55',
		'cover' : false
	},
	{
		'name' : 'þórunn stjörnusteinar',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_10_14_12_03_16 þórunn stjörnusteinar.m4a',
		'year' : 2019,
		'duration' : '2:29',
		'cover' : false
	},
	{
		'name' : 'riddara eldurinn (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_12_06_50_55 riddara eldurinn (cover).m4a',
		'year' : 2019,
		'duration' : '2:03',
		'cover' : true
	},
	{
		'name' : 'ride of a lifetime',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_16_13_43_01ride of a lifetime.m4a',
		'year' : 2019,
		'duration' : '3:28',
		'cover' : false
	},
	{
		'name' : 'soldán austur í Þýskalandi, án öryggishnapps',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_22_01_41_15soldán austur í Þýskalandi, án öryggishnapps.m4a',
		'year' : 2019,
		'duration' : '11:54',
		'cover' : false
	},
	{
		'name' : 'into the elvars butthole',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_22_15_28_32into the elvars butthole.m4a',
		'year' : 2019,
		'duration' : '5:17',
		'cover' : false
	},
	{
		'name' : 'the polar bears',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_22_15_58_12the polar bears.m4a',
		'year' : 2019,
		'duration' : '9:09',
		'cover' : false
	},
	{
		'name' : '- the palace of katamori (CGFC)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_28_15_56_50- the palace of katamori (CGFC).m4a',
		'year' : 2019,
		'duration' : '4:31',
		'cover' : false
	},
	{
		'name' : 'into the trees upptake 2',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_29_12_42_49 into the trees upptake 2.m4a',
		'year' : 2019,
		'duration' : '4:34',
		'cover' : false
	},
	{
		'name' : 'into the trees bleble',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_29_13_25_06 into the trees bleble.m4a',
		'year' : 2019,
		'duration' : '4:36',
		'cover' : false
	},
	{
		'name' : 'sweetness follows (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_11_29_14_16_51 sweetness follows (cover).m4a',
		'year' : 2019,
		'duration' : '3:29',
		'cover' : true
	},
	{
		'name' : 'kóruglan',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_01_13_43_56 kóruglan.m4a',
		'year' : 2019,
		'duration' : '2:29',
		'cover' : false
	},
	{
		'name' : 'yoyoyo trees',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_03_10_41_52yoyoyo trees.m4a',
		'year' : 2019,
		'duration' : '4:12',
		'cover' : false
	},
	{
		'name' : 'sweetness follows 222 (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_03_10_50_22sweetness follows 222 (cover).m4a',
		'year' : 2019,
		'duration' : '4:07',
		'cover' : true
	},
	{
		'name' : 'polar bears 3',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_03_11_07_51polar bears 3.m4a',
		'year' : 2019,
		'duration' : '8:40',
		'cover' : false
	},
	{
		'name' : 'beilliant mistake 33',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_03_11_25_30 beilliant mistake 33.m4a',
		'year' : 2019,
		'duration' : '3:58',
		'cover' : false
	},
	{
		'name' : 'heavenly intro',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_03_11_35_20 heavenly intro.m4a',
		'year' : 2019,
		'duration' : '0:53',
		'cover' : false
	},
	{
		'name' : 'caychenne hortug',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_04_16_59_03 caychenne hortug.m4a',
		'year' : 2019,
		'duration' : '1:43',
		'cover' : false
	},
	{
		'name' : 'polar solo dot',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_05_12_27_24polar solo dot.m4a',
		'year' : 2019,
		'duration' : '1:53',
		'cover' : false
	},
	{
		'name' : 'starlight',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_09_14_03_36starlight.m4a',
		'year' : 2019,
		'duration' : '1:26',
		'cover' : false
	},
	{
		'name' : 'ilius maximus',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_09_14_18_03ilius maximus.m4a',
		'year' : 2019,
		'duration' : '2:24',
		'cover' : false
	},
	{
		'name' : 'erfitt að sprecha',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_09_14_22_34 erfitt að sprecha.m4a',
		'year' : 2019,
		'duration' : '2:41',
		'cover' : false
	},
	{
		'name' : 'bubdras (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_09_15_50_55bubdras (cover).m4a',
		'year' : 2019,
		'duration' : '1:20',
		'cover' : true
	},
	{
		'name' : 'cayce hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_26_15_08_04cayce hugmyndir.m4a',
		'year' : 2019,
		'duration' : '1:32',
		'cover' : false
	},
	{
		'name' : 'crumble pie',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_26_16_01_14crumble pie.m4a',
		'year' : 2019,
		'duration' : '0:39',
		'cover' : false
	},
	{
		'name' : 'circa charlie',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2019_12_31_12_35_27circa charlie.m4a',
		'year' : 2019,
		'duration' : '2:22',
		'cover' : false
	},
	{
		'name' : 'interlude 0082',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_01_01_14_11_04interlude 0082.m4a',
		'year' : 2020,
		'duration' : '4:01',
		'cover' : false
	},
	{
		'name' : 'crystal hall',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_01_07_18_32_29 crystal hall.m4a',
		'year' : 2020,
		'duration' : '4:58',
		'cover' : false
	},
	{
		'name' : 'lucky loop',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_01_21_20_41_05 lucky loop.m4a',
		'year' : 2020,
		'duration' : '9:08',
		'cover' : false
	},
	{
		'name' : 'da da da da da da da',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_01_24_18_05_19da da da da da da da.m4a',
		'year' : 2020,
		'duration' : '0:55',
		'cover' : false
	},
	{
		'name' : 'tiv',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_01_27_11_34_48tiv.m4a',
		'year' : 2020,
		'duration' : '1:40',
		'cover' : false
	},
	{
		'name' : 'samræmi (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_02_08_21_48_45samræmi (cover).m4a',
		'year' : 2020,
		'duration' : '1:37',
		'cover' : true
	},
	{
		'name' : 'in the crypt',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/2020_02_10_23_09_47 in the crypt.m4a',
		'year' : 2020,
		'duration' : '4:45',
		'cover' : false
	},
	{
		'name' : 'damdamdamdamdamdamdam',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/damdamdamdamdamdamdam.m4a',
		'year' : 2017,
		'duration' : '0:42',
		'cover' : false
	},
	{
		'name' : 'ottar-adal',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/ottar-adal.m4a',
		'year' : 2019,
		'duration' : '2:03',
		'cover' : false
	},
	{
		'name' : 'ottar-auka',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/ottar-auka.m4a',
		'year' : 2019,
		'duration' : '1:52',
		'cover' : false
	},
	{
		'name' : 'ottar-milli',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/ottar-milli.m4a',
		'year' : 2019,
		'duration' : '2:02',
		'cover' : false
	},
	{
		'name' : 'the Apple store',
		'url' : 'Lelegar_upptokur/Nexus5X/3.3.2020/the Apple store.m4a',
		'year' : 2017,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : 'bitchdonteven',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/bitchdonteven.m4a',
		'year' : 2017,
		'duration' : '3:43',
		'cover' : false
	},
	{
		'name' : 'china',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/china.m4a',
		'year' : 2017,
		'duration' : '33:14',
		'cover' : false
	},
	{
		'name' : 'fruit_beforeparty',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/fruit_beforeparty.m4a',
		'year' : 2017,
		'duration' : '0:27',
		'cover' : false
	},
	{
		'name' : 'fruit_firstarp',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/fruit_firstarp.m4a',
		'year' : 2017,
		'duration' : '0:15',
		'cover' : false
	},
	{
		'name' : 'fruit_millisöngs',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/fruit_millisöngs.m4a',
		'year' : 2017,
		'duration' : '0:12',
		'cover' : false
	},
	{
		'name' : 'nilstjell',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/nilstjell.m4a',
		'year' : 2017,
		'duration' : '7:37',
		'cover' : false
	},
	{
		'name' : 'var betra þegar ég var ekki að taka upp',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/var betra þegar ég var ekki að taka upp.m4a',
		'year' : 2017,
		'duration' : '2:39',
		'cover' : false
	},
	{
		'name' : 'songharr',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_10_19_16_12songharr.m4a',
		'year' : 2017,
		'duration' : '4:38',
		'cover' : false
	},
	{
		'name' : 'etheralatmó',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_14_etheralatmó.m4a',
		'year' : 2017,
		'duration' : '6:12',
		'cover' : false
	},
	{
		'name' : 'aaaaa',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_17_22_48_37aaaaa.m4a',
		'year' : 2017,
		'duration' : '0:42',
		'cover' : false
	},
	{
		'name' : 'vá',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_17_22_51_58 vá.m4a',
		'year' : 2017,
		'duration' : '4:21',
		'cover' : false
	},
	{
		'name' : 'aa2',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_18_19_14_00aa2.m4a',
		'year' : 2017,
		'duration' : '0:53',
		'cover' : false
	},
	{
		'name' : 'ukulelebounce',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_22_11_49_04ukulelebounce.m4a',
		'year' : 2017,
		'duration' : '2:27',
		'cover' : false
	},
	{
		'name' : 'dl6',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_23_14_19_01 dl6.m4a',
		'year' : 2017,
		'duration' : '0:29',
		'cover' : false
	},
	{
		'name' : 'dl6interstellar',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_23_dl6interstellar.m4a',
		'year' : 2017,
		'duration' : '1:23',
		'cover' : false
	},
	{
		'name' : 'drasl',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_26_23_52_42 drasl.m4a',
		'year' : 2017,
		'duration' : '0:15',
		'cover' : false
	},
	{
		'name' : 'Bach !!',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_16_22_27_55 Bach !!.m4a',
		'year' : 2017,
		'duration' : '7:08',
		'cover' : false
	},
	{
		'name' : 'uuuu',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_25_21_13_34uuuu.m4a',
		'year' : 2017,
		'duration' : '11:09',
		'cover' : false
	},
	{
		'name' : 'ja ja',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_25_21_37_09 ja ja.m4a',
		'year' : 2017,
		'duration' : '2:35',
		'cover' : false
	},
	{
		'name' : 'kt',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_30_22_30_56kt.m4a',
		'year' : 2017,
		'duration' : '5:53',
		'cover' : false
	},
	{
		'name' : 'wowfeelings',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_30_22_47_10wowfeelings.m4a',
		'year' : 2017,
		'duration' : '12:04',
		'cover' : false
	},
	{
		'name' : 'ohmygod',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/ohmygod.m4a',
		'year' : 2017,
		'duration' : '18:47',
		'cover' : false
	},
	{
		'name' : 'hindelburg',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_04_14_21_37_57hindelburg.m4a',
		'year' : 2019,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'alt er eins og upphaf',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_04_14_22_00_47 alt er eins og upphaf.m4a',
		'year' : 2019,
		'duration' : '7:41',
		'cover' : false
	},
	{
		'name' : 'uhm tjah',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_04_14_22_14_18uhm tjah.m4a',
		'year' : 2019,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'eitthvað svona angelic sjitt',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_04_14_22_33_57 eitthvað svona angelic sjitt.m4a',
		'year' : 2019,
		'duration' : '1:03',
		'cover' : false
	},
	{
		'name' : 'heyrhimna',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_04_28_23_22_06heyrhimna.m4a',
		'year' : 2019,
		'duration' : '1:48',
		'cover' : false
	},
	{
		'name' : 'sjávarsíðan',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_04_30_20_08_46sjávarsíðan.m4a',
		'year' : 2019,
		'duration' : '2:06',
		'cover' : false
	},
	{
		'name' : 'capillus confundus',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_04_22_15_54capillus confundus.m4a',
		'year' : 2019,
		'duration' : '8:34',
		'cover' : false
	},
	{
		'name' : 'ohug4',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_15_20_30_35ohug4.m4a',
		'year' : 2019,
		'duration' : '1:09',
		'cover' : false
	},
	{
		'name' : 'totality of being',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_16_21_31_56totality of being.m4a',
		'year' : 2019,
		'duration' : '0:26',
		'cover' : false
	},
	{
		'name' : 'upphaf',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_20_21_49_35upphaf.m4a',
		'year' : 2019,
		'duration' : '3:11',
		'cover' : false
	},
	{
		'name' : 'sibeliusisalive',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_21_16_39_26sibeliusisalive.m4a',
		'year' : 2019,
		'duration' : '2:37',
		'cover' : false
	},
	{
		'name' : 'drungalegt cheerios með snarli',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_22_22_46_36 drungalegt cheerios með snarli.m4a',
		'year' : 2019,
		'duration' : '2:00',
		'cover' : false
	},
	{
		'name' : 'jakkafár',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_24_22_47_23jakkafár.m4a',
		'year' : 2019,
		'duration' : '0:54',
		'cover' : false
	},
	{
		'name' : 'jesuswasacarp333',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_05_24_22_58_54jesuswasacarp333.m4a',
		'year' : 2019,
		'duration' : '5:36',
		'cover' : false
	},
	{
		'name' : 'öfugsnúið',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_06_03_20_05_14öfugsnúið.m4a',
		'year' : 2019,
		'duration' : '5:03',
		'cover' : false
	},
	{
		'name' : 'uuuneiii',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_06_25_14_58_20uuuneiii.m4a',
		'year' : 2019,
		'duration' : '2:05',
		'cover' : false
	},
	{
		'name' : 'barababara',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_06_30_09_37_32barababara.m4a',
		'year' : 2019,
		'duration' : '1:29',
		'cover' : false
	},
	{
		'name' : 'applestorerecording',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_07_02applestorerecording.m4a',
		'year' : 2019,
		'duration' : '3:15',
		'cover' : false
	},
	{
		'name' : 'apple2',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_07_04_19_48_23apple2.m4a',
		'year' : 2019,
		'duration' : '3:10',
		'cover' : false
	},
	{
		'name' : 'chocolate factory of dreams',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_07_04_20_02_27 chocolate factory of dreams.m4a',
		'year' : 2019,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : 'apple3',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_07_04_apple3.m4a',
		'year' : 2019,
		'duration' : '3:08',
		'cover' : false
	},
	{
		'name' : 'garage',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_08_01_12_57_19garage.m4a',
		'year' : 2019,
		'duration' : '2:01',
		'cover' : false
	},
	{
		'name' : 'fantasy',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/2019_08_03_23_22_25 fantasy.m4a',
		'year' : 2019,
		'duration' : '6:20',
		'cover' : false
	},
	{
		'name' : 'damdamdamdamdamdamdam',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/damdamdamdamdamdamdam.m4a',
		'year' : 2017,
		'duration' : '0:42',
		'cover' : false
	},
	{
		'name' : 'ottar-adal',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/ottar-adal.m4a',
		'year' : 2019,
		'duration' : '2:03',
		'cover' : false
	},
	{
		'name' : 'ottar-auka',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/ottar-auka.m4a',
		'year' : 2019,
		'duration' : '1:52',
		'cover' : false
	},
	{
		'name' : 'ottar-milli',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/ottar-milli.m4a',
		'year' : 2019,
		'duration' : '2:02',
		'cover' : false
	},
	{
		'name' : 'the Apple store',
		'url' : 'Lelegar_upptokur/Nexus5X/8.11.2019/the Apple store.m4a',
		'year' : 2017,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : 'As big as a mouse',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/As big as a mouse.m4a',
		'year' : 2022,
		'duration' : '8:06',
		'cover' : false
	},
	{
		'name' : 'August rith vegagerðin',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/August rith vegagerðin.m4a',
		'year' : 2021,
		'duration' : '1:17',
		'cover' : false
	},
	{
		'name' : 'Gloria',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Gloria.m4a',
		'year' : 2021,
		'duration' : '2:52',
		'cover' : false
	},
	{
		'name' : 'Hef gert áður',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Hef gert áður.m4a',
		'year' : 2021,
		'duration' : '1:02',
		'cover' : false
	},
	{
		'name' : 'Hot steaming',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Hot steaming.m4a',
		'year' : 2022,
		'duration' : '5:14',
		'cover' : false
	},
	{
		'name' : 'Ný íbúð part 2',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Ný íbúð part 2.m4a',
		'year' : 2021,
		'duration' : '2:44',
		'cover' : false
	},
	{
		'name' : 'Ný íbúð',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Ný íbúð.m4a',
		'year' : 2021,
		'duration' : '2:43',
		'cover' : false
	},
	{
		'name' : 'Nýja Testamentið',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Nýja Testamentið.m4a',
		'year' : 2021,
		'duration' : '1:43',
		'cover' : false
	},
	{
		'name' : 'Village in the forest',
		'url' : 'Lelegar_upptokur/Nexus5X/8.2.2022/Village in the forest.m4a',
		'year' : 2022,
		'duration' : '7:33',
		'cover' : false
	},
	{
		'name' : 'upptaka á trommur hehe',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_07_23_16_26_40 upptaka á trommur hehe.m4a',
		'year' : 2020,
		'duration' : '8:59',
		'cover' : false
	},
	{
		'name' : 'sunneva',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_07_28_14_39_38 sunneva.m4a',
		'year' : 2020,
		'duration' : '7:38',
		'cover' : false
	},
	{
		'name' : 'cayce flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_05_15_22_17 cayce flygill 2.m4a',
		'year' : 2020,
		'duration' : '2:59',
		'cover' : false
	},
	{
		'name' : 'little Mary bug',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_05_16_47_57 little Mary bug.m4a',
		'year' : 2020,
		'duration' : '2:12',
		'cover' : false
	},
	{
		'name' : 'sá ég spóa (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_08_11_24_21 sá ég spóa (cover).m4a',
		'year' : 2020,
		'duration' : '0:28',
		'cover' : true
	},
	{
		'name' : 'osfrv',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_19_18_42_41 osfrv.m4a',
		'year' : 2020,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'gamla Þórunn eða rytma-hljómæfingar spurn..',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_19_18_46_26 gamla Þórunn eða rytma-hljómæfingar spurn...m4a',
		'year' : 2020,
		'duration' : '1:05',
		'cover' : false
	},
	{
		'name' : 'anna flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_19_49_40 anna flygill 2.m4a',
		'year' : 2020,
		'duration' : '2:18',
		'cover' : false
	},
	{
		'name' : 'anna flygill 3',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_19_53_48 anna flygill 3.m4a',
		'year' : 2020,
		'duration' : '2:06',
		'cover' : false
	},
	{
		'name' : 'anna flygill 4',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_19_58_22 anna flygill 4.m4a',
		'year' : 2020,
		'duration' : '1:55',
		'cover' : false
	},
	{
		'name' : 'kathryn flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_20_05_32 kathryn flygill 2.m4a',
		'year' : 2020,
		'duration' : '7:40',
		'cover' : false
	},
	{
		'name' : 'cayce flygill 3',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_20_23_27 cayce flygill 3.m4a',
		'year' : 2020,
		'duration' : '2:48',
		'cover' : false
	},
	{
		'name' : 'þbj flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_20_40_23 þbj flygill 2.m4a',
		'year' : 2020,
		'duration' : '3:53',
		'cover' : false
	},
	{
		'name' : 'idunn flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_20_49_04 idunn flygill 2.m4a',
		'year' : 2020,
		'duration' : '6:56',
		'cover' : false
	},
	{
		'name' : 'þb flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_21_06_25 þb flygill 2.m4a',
		'year' : 2020,
		'duration' : '6:04',
		'cover' : false
	},
	{
		'name' : 'katie flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_21_13_15 katie flygill 2.m4a',
		'year' : 2020,
		'duration' : '4:32',
		'cover' : false
	},
	{
		'name' : 'bryndís flygill 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_24_21_18_33 bryndís flygill 2.m4a',
		'year' : 2020,
		'duration' : '6:41',
		'cover' : false
	},
	{
		'name' : 'cayce flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_09_50_08 cayce flygill 3x.m4a',
		'year' : 2020,
		'duration' : '3:01',
		'cover' : false
	},
	{
		'name' : 'anna flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_09_55_09 anna flygill 3x.m4a',
		'year' : 2020,
		'duration' : '2:17',
		'cover' : false
	},
	{
		'name' : 'kathryn flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_09_58_33 kathryn flygill 3x.m4a',
		'year' : 2020,
		'duration' : '8:00',
		'cover' : false
	},
	{
		'name' : 'þbj flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_10_07_19 þbj flygill 3x.m4a',
		'year' : 2020,
		'duration' : '3:57',
		'cover' : false
	},
	{
		'name' : 'Bryndís flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_10_12_26 Bryndís flygill 3x.m4a',
		'year' : 2020,
		'duration' : '6:52',
		'cover' : false
	},
	{
		'name' : 'idunn flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_10_20_02 idunn flygill 3x.m4a',
		'year' : 2020,
		'duration' : '6:48',
		'cover' : false
	},
	{
		'name' : 'þb flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_10_27_32 þb flygill 3x.m4a',
		'year' : 2020,
		'duration' : '6:25',
		'cover' : false
	},
	{
		'name' : 'katie flygill 3x',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_28_10_34_54 katie flygill 3x.m4a',
		'year' : 2020,
		'duration' : '4:43',
		'cover' : false
	},
	{
		'name' : 'cayce prufa enginn pedall',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_30_17_34_44 cayce prufa enginn pedall.m4a',
		'year' : 2020,
		'duration' : '1:24',
		'cover' : false
	},
	{
		'name' : 'idunn hægara tempo sample',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_08_30_19_30_36 idunn hægara tempo sample.m4a',
		'year' : 2020,
		'duration' : '1:23',
		'cover' : false
	},
	{
		'name' : 'onlinepianist.com',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_03_11_37_56 onlinepianist.com.m4a',
		'year' : 2020,
		'duration' : '2:08',
		'cover' : false
	},
	{
		'name' : 'brock',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_06_03_14_08 brock.m4a',
		'year' : 2020,
		'duration' : '0:27',
		'cover' : false
	},
	{
		'name' : 'brock2 b kafli hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_17_13_16_15 brock2 b kafli hugmynd.m4a',
		'year' : 2020,
		'duration' : '1:08',
		'cover' : false
	},
	{
		'name' : 'lay a egg layer',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_24_22_32_06 lay a egg layer.m4a',
		'year' : 2020,
		'duration' : '3:53',
		'cover' : false
	},
	{
		'name' : 'Bryndís flygill version rethink',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_25_19_31_08 Bryndís flygill version rethink.m4a',
		'year' : 2020,
		'duration' : '8:41',
		'cover' : false
	},
	{
		'name' : 'kathryn flygill version rethink',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_25_19_55_59 kathryn flygill version rethink.m4a',
		'year' : 2020,
		'duration' : '4:30',
		'cover' : false
	},
	{
		'name' : 'Bryndís alternate solo',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_25_20_10_35 Bryndís alternate solo.m4a',
		'year' : 2020,
		'duration' : '1:40',
		'cover' : false
	},
	{
		'name' : 'Bryndís solo fílingur',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_25_20_22_06 Bryndís solo fílingur.m4a',
		'year' : 2020,
		'duration' : '1:18',
		'cover' : false
	},
	{
		'name' : 'Þórunn flygill rethink byrjun',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_25_20_26_28 Þórunn flygill rethink byrjun.m4a',
		'year' : 2020,
		'duration' : '1:22',
		'cover' : false
	},
	{
		'name' : 'happy song no 1 (gaia at the museum)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_09_27_18_15_02 happy song no 1 (gaia at the museum).m4a',
		'year' : 2020,
		'duration' : '3:45',
		'cover' : false
	},
	{
		'name' : 'lay a egg layer hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_01_11_50_27 lay a egg layer hugmyndir.m4a',
		'year' : 2020,
		'duration' : '13:45',
		'cover' : false
	},
	{
		'name' : 'kathryn betra tempó',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_02_19_14_19 kathryn betra tempó.m4a',
		'year' : 2020,
		'duration' : '5:44',
		'cover' : false
	},
	{
		'name' : 'katie betra',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_02_19_26_47 katie betra.m4a',
		'year' : 2020,
		'duration' : '4:45',
		'cover' : false
	},
	{
		'name' : 'Bryndís hægara meiri fílingur',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_02_19_37_22 Bryndís hægara meiri fílingur.m4a',
		'year' : 2020,
		'duration' : '7:33',
		'cover' : false
	},
	{
		'name' : 'aquas da amazonia fyrsta lagið Philip glass (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_04_17_57_31 aquas da amazonia fyrsta lagið Philip glass (cover).m4a',
		'year' : 2020,
		'duration' : '3:09',
		'cover' : true
	},
	{
		'name' : 'þar sem háir hólar hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_04_19_26_03 þar sem háir hólar hugmynd.m4a',
		'year' : 2020,
		'duration' : '1:10',
		'cover' : false
	},
	{
		'name' : 'hraun í Öxnadal hugmynd að hljómum',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_04_19_41_01 hraun í Öxnadal hugmynd að hljómum.m4a',
		'year' : 2020,
		'duration' : '1:11',
		'cover' : false
	},
	{
		'name' : 'hraun í öxn hugmyndir m. söng',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_04_19_47_50 hraun í öxn hugmyndir m. söng.m4a',
		'year' : 2020,
		'duration' : '3:23',
		'cover' : false
	},
	{
		'name' : 'hraun ABAB hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_04_20_17_06 hraun ABAB hugmynd.m4a',
		'year' : 2020,
		'duration' : '5:00',
		'cover' : false
	},
	{
		'name' : 'tangó hugmyndir! tónsmíðar',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_16_19_21_32 tangó hugmyndir! tónsmíðar.m4a',
		'year' : 2020,
		'duration' : '25:29',
		'cover' : false
	},
	{
		'name' : 'mount rushmore',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_10_19_23_20_01 mount rushmore.m4a',
		'year' : 2020,
		'duration' : '0:44',
		'cover' : false
	},
	{
		'name' : 'smá seinagangur',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_11_02_20_33_21 smá seinagangur.m4a',
		'year' : 2020,
		'duration' : '2:51',
		'cover' : false
	},
	{
		'name' : 'US lament hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_11_04_12_21_18 US lament hugmyndir.m4a',
		'year' : 2020,
		'duration' : '5:23',
		'cover' : false
	},
	{
		'name' : 'draugur',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_11_30_22_07_39 draugur.m4a',
		'year' : 2020,
		'duration' : '3:02',
		'cover' : false
	},
	{
		'name' : 'plagg',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_13_15_06_12 plagg.m4a',
		'year' : 2020,
		'duration' : '2:57',
		'cover' : false
	},
	{
		'name' : 'beep boo',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_15_01_18_39 beep boo.m4a',
		'year' : 2020,
		'duration' : '3:19',
		'cover' : false
	},
	{
		'name' : 'baron gaiden',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_15_11_47_35 baron gaiden.m4a',
		'year' : 2020,
		'duration' : '2:35',
		'cover' : false
	},
	{
		'name' : 'binary classical',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_21_19_54_28 binary classical.m4a',
		'year' : 2020,
		'duration' : '5:42',
		'cover' : false
	},
	{
		'name' : 'binary mamma góð',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_21_20_13_38 binary mamma góð.m4a',
		'year' : 2020,
		'duration' : '9:42',
		'cover' : false
	},
	{
		'name' : 'hildur uppkast',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_21_20_26_08 hildur uppkast.m4a',
		'year' : 2020,
		'duration' : '1:15',
		'cover' : false
	},
	{
		'name' : 'jólasería ásta hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_22_12_26_14 jólasería ásta hugmyndir.m4a',
		'year' : 2020,
		'duration' : '3:18',
		'cover' : false
	},
	{
		'name' : 'jólasería mamma hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_22_15_35_43 jólasería mamma hugmynd.m4a',
		'year' : 2020,
		'duration' : '2:15',
		'cover' : false
	},
	{
		'name' : 'jólaserían mamma hugmynd 2',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_22_18_51_11 jólaserían mamma hugmynd 2.m4a',
		'year' : 2020,
		'duration' : '3:45',
		'cover' : false
	},
	{
		'name' : 'jólasería pabbi hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_22_21_15_07 jólasería pabbi hugmynd.m4a',
		'year' : 2020,
		'duration' : '2:41',
		'cover' : false
	},
	{
		'name' : 'jólaserían pabbi hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_23_16_06_11 jólaserían pabbi hugmynd.m4a',
		'year' : 2020,
		'duration' : '1:35',
		'cover' : false
	},
	{
		'name' : 'mega evolution (drasl)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_24_12_40_09 mega evolution (drasl).m4a',
		'year' : 2020,
		'duration' : '1:47',
		'cover' : false
	},
	{
		'name' : 'jólaserían elínbjört hugmynd',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_24_12_42_38 jólaserían elínbjört hugmynd.m4a',
		'year' : 2020,
		'duration' : '9:00',
		'cover' : false
	},
	{
		'name' : 'jólasería Elínbjört seinni hluti',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_24_12_53_08 jólasería Elínbjört seinni hluti.m4a',
		'year' : 2020,
		'duration' : '1:37',
		'cover' : false
	},
	{
		'name' : 'jólasería Elínbjört endir',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_24_12_57_57 jólasería Elínbjört endir.m4a',
		'year' : 2020,
		'duration' : '1:13',
		'cover' : false
	},
	{
		'name' : 'jólaserían Ósk',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_24_14_19_17 jólaserían Ósk.m4a',
		'year' : 2020,
		'duration' : '1:32',
		'cover' : false
	},
	{
		'name' : 'jólaserían mamma upptaka',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2020_12_24_20_47_39 jólaserían mamma upptaka.m4a',
		'year' : 2020,
		'duration' : '2:40',
		'cover' : false
	},
	{
		'name' : 'marvo kart',
		'url' : 'Lelegar_upptokur/Nexus5X/9.1.2021/2021_01_09_21_45_28 marvo kart.m4a',
		'year' : 2021,
		'duration' : '8:53',
		'cover' : false
	},
	{
		'name' : 'kv (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_02_16_00_46_09 kv (cover).m4a',
		'year' : 2017,
		'duration' : '0:35',
		'cover' : true
	},
	{
		'name' : 'kuldinn (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_02_16_00_kuldinn (cover).m4a',
		'year' : 2017,
		'duration' : '0:13',
		'cover' : true
	},
	{
		'name' : 'minorminor',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_02_18_minorminor.m4a',
		'year' : 2017,
		'duration' : '4:40',
		'cover' : false
	},
	{
		'name' : 'birta',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_04_01_birta.m4a',
		'year' : 2017,
		'duration' : '6:25',
		'cover' : false
	},
	{
		'name' : 'isjalfummerimprov (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_04_04_22_46_46isjalfummerimprov (cover).m4a',
		'year' : 2017,
		'duration' : '1:17',
		'cover' : true
	},
	{
		'name' : 'rythmatik',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/rythmatik.m4a',
		'year' : 2017,
		'duration' : '4:49',
		'cover' : false
	},
	{
		'name' : 'americanPsycho',
		'url' : 'Lelegar_upptokur/simi2014/americanPsycho.m4a',
		'year' : 2014,
		'duration' : '3:37',
		'cover' : false
	},
	{
		'name' : 'tangoey_piano',
		'url' : 'Lelegar_upptokur/simi2014/tangoey_piano.m4a',
		'year' : 2014,
		'duration' : '1:39',
		'cover' : false
	},
	{
		'name' : 'Voice 006',
		'url' : 'Lelegar_upptokur/simi2014/Voice 006.m4a',
		'year' : 2014,
		'duration' : '5:12',
		'cover' : false
	},
	{
		'name' : 'Voice 007',
		'url' : 'Lelegar_upptokur/simi2014/Voice 007.m4a',
		'year' : 2014,
		'duration' : '1:38',
		'cover' : false
	},
	{
		'name' : 'weird_organ_bass',
		'url' : 'Lelegar_upptokur/simi2014/weird_organ_bass.m4a',
		'year' : 2014,
		'duration' : '1:33',
		'cover' : false
	},
	{
		'name' : 'Voice 035',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 035.m4a',
		'year' : 2015,
		'duration' : '14:33',
		'cover' : false
	},
	{
		'name' : 'Voice 038',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 038.m4a',
		'year' : 2015,
		'duration' : '0:12',
		'cover' : false
	},
	{
		'name' : 'Voice 041',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 041.m4a',
		'year' : 2015,
		'duration' : '1:46',
		'cover' : false
	},
	{
		'name' : 'Voice 042',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 042.m4a',
		'year' : 2015,
		'duration' : '2:39',
		'cover' : false
	},
	{
		'name' : 'nordD4',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/nordD4.m4a',
		'year' : 2016,
		'duration' : '6:28',
		'cover' : false
	},
	{
		'name' : 'Voice 044 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 044 (cover).m4a',
		'year' : 2016,
		'duration' : '2:30',
		'cover' : true
	},
	{
		'name' : 'Voice 045',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 045.m4a',
		'year' : 2016,
		'duration' : '2:13',
		'cover' : false
	},
	{
		'name' : 'Voice 046 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 046 (cover).m4a',
		'year' : 2016,
		'duration' : '2:14',
		'cover' : true
	},
	{
		'name' : 'Voice 047',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 047.m4a',
		'year' : 2016,
		'duration' : '1:42',
		'cover' : false
	},
	{
		'name' : 'Voice 051',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 051.m4a',
		'year' : 2016,
		'duration' : '0:38',
		'cover' : false
	},
	{
		'name' : 'Voice 052 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 052 (cover).m4a',
		'year' : 2016,
		'duration' : '0:59',
		'cover' : true
	},
	{
		'name' : 'Voice 053 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 053 (cover).m4a',
		'year' : 2016,
		'duration' : '0:54',
		'cover' : true
	},
	{
		'name' : 'Voice 054',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 054.m4a',
		'year' : 2016,
		'duration' : '2:23',
		'cover' : false
	},
	{
		'name' : 'Voice 056 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 056 (cover).m4a',
		'year' : 2016,
		'duration' : '0:41',
		'cover' : true
	},
	{
		'name' : 'Voice 057',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 057.m4a',
		'year' : 2016,
		'duration' : '2:54',
		'cover' : false
	},
	{
		'name' : 'Voice 058 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 058 (cover).m4a',
		'year' : 2016,
		'duration' : '4:14',
		'cover' : true
	},
	{
		'name' : 'Alvarlegur Templari',
		'url' : 'Tonlist_haha/2013/Alvarlegur Templari.m4a',
		'year' : 2013,
		'duration' : '2:38',
		'cover' : false
	},
	{
		'name' : 'Cayce',
		'url' : 'Tonlist_haha/2013/Cayce.m4a',
		'year' : 2013,
		'duration' : '4:13',
		'cover' : false
	},
	{
		'name' : 'cayceV3',
		'url' : 'Tonlist_haha/2013/cayceV3.m4a',
		'year' : 2013,
		'duration' : '4:09',
		'cover' : false
	},
	{
		'name' : 'Drungalegt_',
		'url' : 'Tonlist_haha/2013/Drungalegt_.m4a',
		'year' : 2013,
		'duration' : '1:55',
		'cover' : false
	},
	{
		'name' : 'FunkyMattarugl',
		'url' : 'Tonlist_haha/2013/FunkyMattarugl.m4a',
		'year' : 2013,
		'duration' : '3:25',
		'cover' : false
	},
	{
		'name' : 'G-MOLL LAGIÐ píanó',
		'url' : 'Tonlist_haha/2013/G-MOLL LAGIÐ píanó.m4a',
		'year' : 2013,
		'duration' : '3:52',
		'cover' : false
	},
	{
		'name' : 'Hamingja',
		'url' : 'Tonlist_haha/2013/Hamingja.m4a',
		'year' : 2013,
		'duration' : '2:44',
		'cover' : false
	},
	{
		'name' : 'Hljómar og Dóri',
		'url' : 'Tonlist_haha/2013/Hljómar og Dóri.m4a',
		'year' : 2013,
		'duration' : '1:47',
		'cover' : false
	},
	{
		'name' : 'Hættu þessu rugli og horfðu upp í stjörnubjartan himininn',
		'url' : 'Tonlist_haha/2013/Hættu þessu rugli og horfðu upp í stjörnubjartan himininn.m4a',
		'year' : 2013,
		'duration' : '4:29',
		'cover' : false
	},
	{
		'name' : 'intro_flowers',
		'url' : 'Tonlist_haha/2013/intro_flowers.m4a',
		'year' : 2013,
		'duration' : '0:26',
		'cover' : false
	},
	{
		'name' : 'KORG51DELAY',
		'url' : 'Tonlist_haha/2013/KORG51DELAY.m4a',
		'year' : 2013,
		'duration' : '3:03',
		'cover' : false
	},
	{
		'name' : 'KORG56DELAY(no relation)',
		'url' : 'Tonlist_haha/2013/KORG56DELAY(no relation).m4a',
		'year' : 2013,
		'duration' : '3:23',
		'cover' : false
	},
	{
		'name' : 'Live_sma_pitch_orgel',
		'url' : 'Tonlist_haha/2013/Live_sma_pitch_orgel.m4a',
		'year' : 2013,
		'duration' : '5:09',
		'cover' : false
	},
	{
		'name' : 'Osom_Techno_Lag',
		'url' : 'Tonlist_haha/2013/Osom_Techno_Lag.m4a',
		'year' : 2013,
		'duration' : '1:32',
		'cover' : false
	},
	{
		'name' : 'pitch_orgel',
		'url' : 'Tonlist_haha/2013/pitch_orgel.m4a',
		'year' : 2013,
		'duration' : '3:43',
		'cover' : false
	},
	{
		'name' : 'Páskaegg nr.3',
		'url' : 'Tonlist_haha/2013/Páskaegg nr.3.m4a',
		'year' : 2013,
		'duration' : '6:07',
		'cover' : false
	},
	{
		'name' : 'rosalegtrugl',
		'url' : 'Tonlist_haha/2013/rosalegtrugl.m4a',
		'year' : 2013,
		'duration' : '7:00',
		'cover' : false
	},
	{
		'name' : 'samraedur_V1',
		'url' : 'Tonlist_haha/2013/samraedur_V1.m4a',
		'year' : 2013,
		'duration' : '5:03',
		'cover' : false
	},
	{
		'name' : 'SimpleBell',
		'url' : 'Tonlist_haha/2013/SimpleBell.m4a',
		'year' : 2013,
		'duration' : '2:26',
		'cover' : false
	},
	{
		'name' : 'sofa',
		'url' : 'Tonlist_haha/2013/sofa.m4a',
		'year' : 2013,
		'duration' : '1:15',
		'cover' : false
	},
	{
		'name' : 'To_Affinity_And_Beyond',
		'url' : 'Tonlist_haha/2013/To_Affinity_And_Beyond.m4a',
		'year' : 2013,
		'duration' : '4:20',
		'cover' : false
	},
	{
		'name' : 'Í Höll Fjallkonungsins (samt ekki)',
		'url' : 'Tonlist_haha/2013/Í Höll Fjallkonungsins (samt ekki).m4a',
		'year' : 2013,
		'duration' : '2:18',
		'cover' : false
	},
	{
		'name' : 'lagid_hans_afa_2 (cover)',
		'url' : 'Tonlist_haha/2013/piano/lagid_hans_afa_2 (cover).m4a',
		'year' : 2013,
		'duration' : '0:22',
		'cover' : true
	},
	{
		'name' : 'poem_mic_3 (cover)',
		'url' : 'Tonlist_haha/2013/piano/poem_mic_3 (cover).m4a',
		'year' : 2013,
		'duration' : '1:36',
		'cover' : true
	},
	{
		'name' : 'bachPreludeNo1Justin',
		'url' : 'Tonlist_haha/2014/bachPreludeNo1Justin.m4a',
		'year' : 2014,
		'duration' : '1:56',
		'cover' : false
	},
	{
		'name' : 'TheLordIsMyShepherd',
		'url' : 'Tonlist_haha/2014/TheLordIsMyShepherd.m4a',
		'year' : 2014,
		'duration' : '1:14',
		'cover' : false
	},
	{
		'name' : 'To Affinity And Beyond-10',
		'url' : 'Tonlist_haha/2014/to_affinity_v2/To Affinity And Beyond-10.m4a',
		'year' : 2014,
		'duration' : '5:10',
		'cover' : false
	},
	{
		'name' : 'America_m&a (cover)',
		'url' : 'Tonlist_haha/2015/America_m&a (cover).m4a',
		'year' : 2015,
		'duration' : '1:28',
		'cover' : true
	},
	{
		'name' : 'damndimdam',
		'url' : 'Tonlist_haha/2015/damndimdam.m4a',
		'year' : 2015,
		'duration' : '5:12',
		'cover' : false
	},
	{
		'name' : 'drasl',
		'url' : 'Tonlist_haha/2015/ac/drasl.m4a',
		'year' : 2015,
		'duration' : '0:14',
		'cover' : false
	},
	{
		'name' : 'ninth2',
		'url' : 'Tonlist_haha/2015/hex/ninth2.m4a',
		'year' : 2015,
		'duration' : '5:43',
		'cover' : false
	},
	{
		'name' : 'singing_entire_thing',
		'url' : 'Tonlist_haha/2015/hex/singing_entire_thing.m4a',
		'year' : 2015,
		'duration' : '5:42',
		'cover' : false
	},
	{
		'name' : 'doors',
		'url' : 'Tonlist_haha/2015/kristjan/doors.m4a',
		'year' : 2015,
		'duration' : '12:22',
		'cover' : false
	},
	{
		'name' : 'pompei',
		'url' : 'Tonlist_haha/2015/kristjan/pompei.m4a',
		'year' : 2015,
		'duration' : '5:58',
		'cover' : false
	},
	{
		'name' : 'vidya',
		'url' : 'Tonlist_haha/2015/kristjan/vidya.m4a',
		'year' : 2015,
		'duration' : '9:44',
		'cover' : false
	},
	{
		'name' : 'monkey_shines_spooked',
		'url' : 'Tonlist_haha/2016/monkey_shines/monkey_shines_spooked.m4a',
		'year' : 2016,
		'duration' : '4:03',
		'cover' : false
	},
	{
		'name' : 'kt-demo',
		'url' : 'Tonlist_haha/2018/kt/kt-demo.m4a',
		'year' : 2018,
		'duration' : '5:12',
		'cover' : false
	}
];

global.set('audio-data', audio_data);

}());