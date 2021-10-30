const { ENV } = process.env;

export const isTest = ENV === 'test';

export const isLive = ENV === 'live';
