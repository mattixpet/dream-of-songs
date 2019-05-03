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