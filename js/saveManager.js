// 存档管理器 - 负责游戏存档的创建、读取、加载和删除
// 不直接修改游戏状态，仅通过接口与现有系统交互

import { Event } from './model.js';

/**
 * 存档数据结构
 * @typedef {Object} SaveData
 * @property {number} slot - 存档槽位
 * @property {number} timestamp - 存档时间戳
 * @property {string} chapter - 当前章节
 * @property {string} scene - 当前场景
 * @property {number} eventIndex - 当前事件索引
 * @property {string} progressText - 进度描述文本
 * @property {Object} stateData - 游戏状态数据
 */

/**
 * 存档管理器类
 */
class SaveManager {
  constructor() {
    // 初始化存档管理器
    this.currentUser = localStorage.getItem('currentUser');
    if (!this.currentUser) {
      throw new Error('用户未登录，无法使用存档功能');
    }
  }

  /**
   * 获取所有存档
   * @returns {Array<SaveData>} 存档列表
   */
  getAllSaves() {
    const savesJson = localStorage.getItem(`saves_${this.currentUser}`);
    return savesJson ? JSON.parse(savesJson) : [];
  }

  /**
   * 保存当前游戏状态到指定槽位
   * @param {number} slot - 存档槽位
   * @param {Object} state - 游戏状态对象
   * @param {string} chapter - 当前章节
   * @param {string} scene - 当前场景
   * @param {string} progressText - 进度描述
   * @returns {boolean} 是否保存成功
   */
  saveGame(slot, state, chapter, scene, progressText) {
    try {
      // 获取当前所有存档
      const saves = this.getAllSaves();
      // 转换游戏状态为存档数据
      const saveData = this.stateToSaveData(state, chapter, scene, progressText);
      // 设置存档槽位
      saveData.slot = slot;
      // 更新或添加存档
      const saveIndex = saves.findIndex(s => s.slot === slot);
      if (saveIndex >= 0) {
        saves[saveIndex] = saveData;
      } else {
        saves.push(saveData);
      }
      // 保存到localStorage
      localStorage.setItem(`saves_${this.currentUser}`, JSON.stringify(saves));
      return true;
    } catch (error) {
      console.error('保存存档失败:', error);
      return false;
    }
  }

  /**
   * 加载指定槽位的存档
   * @param {number} slot - 存档槽位
   * @returns {Object|null} 包含state和eventIndex的对象，若存档不存在则返回null
   */
  loadGame(slot) {
    try {
      const saves = this.getAllSaves();
      const saveData = saves.find(s => s.slot === slot);
      if (!saveData) return null;
      return this.saveDataToState(saveData);
    } catch (error) {
      console.error('加载存档失败:', error);
      return null;
    }
  }

  /**
   * 删除指定槽位的存档
   * @param {number} slot - 存档槽位
   * @returns {boolean} 是否删除成功
   */
  deleteSave(slot) {
    try {
      let saves = this.getAllSaves();
      const initialLength = saves.length;
      saves = saves.filter(s => s.slot !== slot);
      if (saves.length === initialLength) return false; // 没有找到要删除的存档
      localStorage.setItem(`saves_${this.currentUser}`, JSON.stringify(saves));
      return true;
    } catch (error) {
      console.error('删除存档失败:', error);
      return false;
    }
  }

  /**
   * 将游戏状态转换为存档数据
   * @param {Object} state - 游戏状态对象
   * @param {string} chapter - 当前章节
   * @param {string} scene - 当前场景
   * @param {string} progressText - 进度描述
   * @returns {SaveData} 存档数据
   */
  stateToSaveData(state, chapter, scene, progressText) {
    return {
      slot: null, // 槽位将在保存时确定
      timestamp: Date.now(),
      chapter,
      scene,
      eventIndex: state.currentEventIndex,
      progressText,
      stateData: {
        isInGame: state.isInGame
      }
    };
  }

  /**
   * 将存档数据转换为游戏状态
   * @param {SaveData} saveData - 存档数据
   * @returns {Object} 游戏状态对象
   */
  saveDataToState(saveData) {
    return {
      currentEventIndex: saveData.eventIndex,
      isInGame: saveData.stateData.isInGame
    };
  }

  /**
   * 获取故事标志
   * @returns {Object} 故事标志对象
   */
  getStoryFlags() {
    const saves = this.getAllSaves();
    // 获取当前存档的标志（简化实现：取最新存档）
    if (saves.length > 0) {
      return saves[saves.length - 1].storyFlags || {};
    }
    return {};
  }

  /**
   * 设置故事标志
   * @param {Object} flags - 要设置的标志键值对
   */
  setStoryFlags(flags) {
    const saves = this.getAllSaves();
    if (saves.length > 0) {
      // 更新最新存档的标志
      saves[saves.length - 1].storyFlags = {
        ...saves[saves.length - 1].storyFlags,
        ...flags
      };
      localStorage.setItem(`saves_${this.currentUser}`, JSON.stringify(saves));
    }
  }
}

export const saveManager = new SaveManager();