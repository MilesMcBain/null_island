AFRAME.registerComponent('sealevelmap', {
    schema: {
        rate: {type: "number", default: 120},
        start: {type: "boolean", default: false}
    },
    init: function(){
        this.scenariomap = 
        [
            {
                "key": 1974,
                "value": 0
            },
            {
                "key": 1975,
                "value": 0.003
            },
            {
                "key": 1976,
                "value": 0.006
            },
            {
                "key": 1977,
                "value": 0.009
            },
            {
                "key": 1978,
                "value": 0.011
            },
            {
                "key": 1979,
                "value": 0.014
            },
            {
                "key": 1980,
                "value": 0.017
            },
            {
                "key": 1981,
                "value": 0.02
            },
            {
                "key": 1982,
                "value": 0.023
            },
            {
                "key": 1983,
                "value": 0.025
            },
            {
                "key": 1984,
                "value": 0.028
            },
            {
                "key": 1985,
                "value": 0.031
            },
            {
                "key": 1986,
                "value": 0.034
            },
            {
                "key": 1987,
                "value": 0.037
            },
            {
                "key": 1988,
                "value": 0.039
            },
            {
                "key": 1989,
                "value": 0.042
            },
            {
                "key": 1990,
                "value": 0.045
            },
            {
                "key": 1991,
                "value": 0.048
            },
            {
                "key": 1992,
                "value": 0.051
            },
            {
                "key": 1993,
                "value": 0.053
            },
            {
                "key": 1994,
                "value": 0.056
            },
            {
                "key": 1995,
                "value": 0.059
            },
            {
                "key": 1996,
                "value": 0.062
            },
            {
                "key": 1997,
                "value": 0.065
            },
            {
                "key": 1998,
                "value": 0.067
            },
            {
                "key": 1999,
                "value": 0.07
            },
            {
                "key": 2000,
                "value": 0.073
            },
            {
                "key": 2001,
                "value": 0.076
            },
            {
                "key": 2002,
                "value": 0.079
            },
            {
                "key": 2003,
                "value": 0.082
            },
            {
                "key": 2004,
                "value": 0.084
            },
            {
                "key": 2005,
                "value": 0.087
            },
            {
                "key": 2006,
                "value": 0.09
            },
            {
                "key": 2007,
                "value": 0.093
            },
            {
                "key": 2008,
                "value": 0.096
            },
            {
                "key": 2009,
                "value": 0.098
            },
            {
                "key": 2010,
                "value": 0.101
            },
            {
                "key": 2011,
                "value": 0.104
            },
            {
                "key": 2012,
                "value": 0.107
            },
            {
                "key": 2013,
                "value": 0.11
            },
            {
                "key": 2014,
                "value": 0.112
            },
            {
                "key": 2015,
                "value": 0.115
            },
            {
                "key": 2016,
                "value": 0.118
            },
            {
                "key": 2017,
                "value": 0.121
            },
            {
                "key": 2018,
                "value": 0.124
            },
            {
                "key": 2019,
                "value": 0.126
            },
            {
                "key": 2020,
                "value": 0.129
            },
            {
                "key": 2021,
                "value": 0.1319
            },
            {
                "key": 2022,
                "value": 0.1348
            },
            {
                "key": 2023,
                "value": 0.1377
            },
            {
                "key": 2024,
                "value": 0.1406
            },
            {
                "key": 2025,
                "value": 0.1435
            },
            {
                "key": 2026,
                "value": 0.1464
            },
            {
                "key": 2027,
                "value": 0.1493
            },
            {
                "key": 2028,
                "value": 0.1522
            },
            {
                "key": 2029,
                "value": 0.1551
            },
            {
                "key": 2030,
                "value": 0.158
            },
            {
                "key": 2031,
                "value": 0.1609
            },
            {
                "key": 2032,
                "value": 0.1638
            },
            {
                "key": 2033,
                "value": 0.1667
            },
            {
                "key": 2034,
                "value": 0.1696
            },
            {
                "key": 2035,
                "value": 0.1725
            },
            {
                "key": 2036,
                "value": 0.1754
            },
            {
                "key": 2037,
                "value": 0.1783
            },
            {
                "key": 2038,
                "value": 0.1812
            },
            {
                "key": 2039,
                "value": 0.1841
            },
            {
                "key": 2040,
                "value": 0.187
            },
            {
                "key": 2041,
                "value": 0.1915
            },
            {
                "key": 2042,
                "value": 0.196
            },
            {
                "key": 2043,
                "value": 0.2005
            },
            {
                "key": 2044,
                "value": 0.205
            },
            {
                "key": 2045,
                "value": 0.2095
            },
            {
                "key": 2046,
                "value": 0.214
            },
            {
                "key": 2047,
                "value": 0.2185
            },
            {
                "key": 2048,
                "value": 0.223
            },
            {
                "key": 2049,
                "value": 0.2275
            },
            {
                "key": 2050,
                "value": 0.232
            },
            {
                "key": 2051,
                "value": 0.2365
            },
            {
                "key": 2052,
                "value": 0.241
            },
            {
                "key": 2053,
                "value": 0.2455
            },
            {
                "key": 2054,
                "value": 0.25
            },
            {
                "key": 2055,
                "value": 0.2545
            },
            {
                "key": 2056,
                "value": 0.259
            },
            {
                "key": 2057,
                "value": 0.2635
            },
            {
                "key": 2058,
                "value": 0.268
            },
            {
                "key": 2059,
                "value": 0.2725
            },
            {
                "key": 2060,
                "value": 0.277
            },
            {
                "key": 2061,
                "value": 0.284
            },
            {
                "key": 2062,
                "value": 0.291
            },
            {
                "key": 2063,
                "value": 0.298
            },
            {
                "key": 2064,
                "value": 0.305
            },
            {
                "key": 2065,
                "value": 0.312
            },
            {
                "key": 2066,
                "value": 0.319
            },
            {
                "key": 2067,
                "value": 0.326
            },
            {
                "key": 2068,
                "value": 0.333
            },
            {
                "key": 2069,
                "value": 0.34
            },
            {
                "key": 2070,
                "value": 0.347
            },
            {
                "key": 2071,
                "value": 0.354
            },
            {
                "key": 2072,
                "value": 0.361
            },
            {
                "key": 2073,
                "value": 0.368
            },
            {
                "key": 2074,
                "value": 0.375
            },
            {
                "key": 2075,
                "value": 0.382
            },
            {
                "key": 2076,
                "value": 0.389
            },
            {
                "key": 2077,
                "value": 0.396
            },
            {
                "key": 2078,
                "value": 0.403
            },
            {
                "key": 2079,
                "value": 0.41
            },
            {
                "key": 2080,
                "value": 0.417
            },
            {
                "key": 2081,
                "value": 0.4265
            },
            {
                "key": 2082,
                "value": 0.436
            },
            {
                "key": 2083,
                "value": 0.4455
            },
            {
                "key": 2084,
                "value": 0.455
            },
            {
                "key": 2085,
                "value": 0.4645
            },
            {
                "key": 2086,
                "value": 0.474
            },
            {
                "key": 2087,
                "value": 0.4835
            },
            {
                "key": 2088,
                "value": 0.493
            },
            {
                "key": 2089,
                "value": 0.5025
            },
            {
                "key": 2090,
                "value": 0.512
            },
            {
                "key": 2091,
                "value": 0.5215
            },
            {
                "key": 2092,
                "value": 0.531
            },
            {
                "key": 2093,
                "value": 0.5405
            },
            {
                "key": 2094,
                "value": 0.55
            },
            {
                "key": 2095,
                "value": 0.5595
            },
            {
                "key": 2096,
                "value": 0.569
            },
            {
                "key": 2097,
                "value": 0.5785
            },
            {
                "key": 2098,
                "value": 0.588
            },
            {
                "key": 2099,
                "value": 0.5975
            },
            {
                "key": 2100,
                "value": 0.607
            }
        ]
        
        this.original_pos = this.el.object3D.getWorldPosition()
        this.counter = 0
        this.year = 1974
    },
    tick: function(){
        if(this.data.start){
            this.counter++
            if(this.counter >= this.data.rate){
                scenario_match = this.scenariomap.filter(item => item.key == this.year)[0]
                if(scenario_match) {
                    new_y = scenario_match.value + this.original_pos.y
                    this.el.setAttribute('position', {x: this.original_pos.x, y: new_y, z: this.original_pos.z })
                    this.el.sceneEl.querySelector('#yearlabel').setAttribute("value", this.year)
                    this.year++
                }
                this.counter= 0  
            }
        }   
    }
})




