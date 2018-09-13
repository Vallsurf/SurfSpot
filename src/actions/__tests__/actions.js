import * as actions from '../actions.js'

describe('Actions', () => {
    it('should return the fetchSpotsSuccess() action', () => {
      const action = actions.fetchSpotsSuccess()
      expect(action.type).toEqual(actions.FETCH_SPOTS_SUCCESS)
        })

    it('should return the fetchSpotsError action', () => {
      const err = 'oops'
      const action = actions.fetchSpotsError(err)
      expect(action.type).toEqual(actions.FETCH_SPOTS_ERR)
      expect(action.err).toEqual(err)
        })

    it('should return the fetchSpotsData action', () => {
        const action = actions.fetchSpotsData()
        expect(action.type).toEqual(actions.FETCH_SPOTS_DATA)
        })

    it('should return the fetchUserSpots action', () => {
        const userspots = 'test'
        const action = actions.fetchUserSpots(userspots)
        expect(action.type).toEqual(actions.FETCH_USER_SPOTS)
        expect(action.userspots).toEqual(userspots)
        })

    it('should return the editUserSpots action', () => {
        const userspots = 'test'
        const action = actions.editUserSpots(userspots)
        expect(action.type).toEqual(actions.EDIT_USER_SPOTS)
        expect(action.userspots).toEqual(userspots)
        })
    
    it('should return the refreshDashData action', () => {
        const action = actions.refreshDashData()
        expect(action.type).toEqual(actions.REFRESH_DASH_DATA)
        })
    
    it('should return the fetchDashboardSuccess action', () => {
        const {forecast, wind, swell, tide} = 'test'
        const action = actions.fetchDashboardSuccess(forecast, wind, swell, tide)
        expect(action.type).toEqual(actions.FETCH_DASHBOARD_SUCCESS)
        expect(action.forecast).toEqual(forecast)
        expect(action.wind).toEqual(wind)
        expect(action.swell).toEqual(swell)
        expect(action.tide).toEqual(tide)
        })
    
    it('should return the fetchSingleSpotFullSuccess action', () => {
        const {forecast, wind, swell, tide} = 'test'
        const action = actions.fetchSingleSpotFullSuccess(forecast, wind, swell, tide)
        expect(action.type).toEqual(actions.FETCH_SINGLESPOT_FULL_SUCCESS)
        expect(action.forecast).toEqual(forecast)
        expect(action.wind).toEqual(wind)
        expect(action.swell).toEqual(swell)
        expect(action.tide).toEqual(tide)
        })

    it('should return the fetchCountyDataOnly action', () => {
        const {forecast, wind, swell, tide} = 'test'
        const action = actions.fetchCountyDataOnly(forecast, wind, swell, tide)
        expect(action.type).toEqual(actions.FETCH_COUNTY_DATA_ONLY)
        expect(action.forecast).toEqual(forecast)
        expect(action.wind).toEqual(wind)
        expect(action.swell).toEqual(swell)
        expect(action.tide).toEqual(tide)
        })

    it('should return the fetchDashboardCountyData action', () => {
        const {forecast, wind, swell, tide} = 'test'
        const action = actions.fetchDashboardCountyData(forecast, wind, swell, tide)
        expect(action.type).toEqual(actions.FETCH_DASHBOARD_COUNTY_DATA_ONLY)
        expect(action.forecast).toEqual(forecast)
        expect(action.wind).toEqual(wind)
        expect(action.swell).toEqual(swell)
        expect(action.tide).toEqual(tide)
        })

    it('should return the LoginSuccess action', () => {
        const user = 'test'
        const action = actions.LoginSuccess(user)
        expect(action.type).toEqual(actions.LOGIN)
        expect(action.user).toEqual(user)
        })
    
    it('should return the RegisterSuccess action', () => {
        const user = 'test'
        const action = actions.RegisterSuccess(user)
        expect(action.type).toEqual(actions.REGISTER)
        expect(action.user).toEqual(user)
        })

  })